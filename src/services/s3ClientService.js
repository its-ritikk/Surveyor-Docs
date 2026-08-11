/**
 * Frontend S3 Media Service
 * Handles requesting presigned URLs from the backend while preserving exact original filenames,
 * uploading files directly to S3 from the browser, and registering separate documentation metadata.
 */

async function parseJsonResponse(res, defaultErrorMsg = "Request failed.") {
  const text = await res.text();
  if (!text || !text.trim()) {
    return {
      success: false,
      error: `${defaultErrorMsg} (Server returned empty response ${res.status}). Please check backend server.`,
    };
  }
  try {
    return JSON.parse(text);
  } catch (err) {
    return {
      success: false,
      error: `${defaultErrorMsg} (Invalid JSON response ${res.status}).`,
    };
  }
}

export async function checkS3Connection() {
  try {
    const res = await fetch("/api/media/verify");
    const data = await parseJsonResponse(res, "S3 connection check failed.");
    return data;
  } catch (err) {
    return { success: false, error: "Backend server unreachable. Ensure server is running on port 5000." };
  }
}

export async function listS3Media(prefix = "") {
  try {
    const res = await fetch(`/api/media/list?prefix=${encodeURIComponent(prefix)}`);
    const data = await parseJsonResponse(res, "Failed to fetch media list.");
    return data;
  } catch (err) {
    return { success: false, error: "Failed to fetch media list." };
  }
}

export async function deleteS3Media(mediaKey) {
  try {
    const res = await fetch("/api/media/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mediaKey }),
    });
    const data = await parseJsonResponse(res, "Failed to delete media object.");
    return data;
  } catch (err) {
    return { success: false, error: "Failed to delete media object." };
  }
}

export async function registerS3MediaMapping({
  docPath,
  sectionKey,
  mediaType = "image",
  src,
  alt = "",
  caption = "",
  metadata = {},
}) {
  try {
    const res = await fetch("/api/media/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        docPath,
        sectionKey,
        mediaType,
        src,
        alt,
        caption,
        metadata,
      }),
    });
    const data = await parseJsonResponse(res, "Failed to register media mapping.");
    return data;
  } catch (err) {
    return { success: false, error: "Failed to register media mapping." };
  }
}

/**
 * Uploads a file directly to AWS S3 preserving original filename,
 * and registers documentation metadata mapping separately.
 */
export async function uploadMediaDirectToS3({
  file,
  section = "general",
  mediaType = "image", // "image" | "video"
  mapping = {}, // { module, docPath, sectionKey, alt, caption }
  onProgress,
}) {
  if (!file) throw new Error("No file selected.");

  // Step 1: Request presigned upload authorization from backend (preserving original filename)
  const requestBody = {
    section,
    mediaType,
    fileName: file.name, // EXACT original filename preserved!
    contentType: file.type,
    fileSize: file.size,
    metadata: {
      module: mapping.module || "",
      docPath: mapping.docPath || "",
      sectionKey: mapping.sectionKey || "",
    },
  };

  const presignedRes = await fetch("/api/media/presigned-url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  const presignedData = await parseJsonResponse(presignedRes, "Upload authorization failed.");

  if (!presignedRes.ok || !presignedData.success) {
    throw new Error(presignedData.error || "Upload authorization failed. Please try again.");
  }

  const { presignedUrl, mediaKey, publicUrl } = presignedData;

  // Step 2: Direct browser-to-S3 upload via XMLHttpRequest
  await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", presignedUrl, true);
    xhr.setRequestHeader("Content-Type", file.type);

    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          onProgress(percent);
        }
      };
    }

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 204) {
        resolve();
      } else {
        reject(new Error("Upload failed. S3 storage declined the request."));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Upload failed due to network error. Please try again."));
    };

    xhr.send(file);
  });

  // Step 3: Automatically register mapping in mediaRegistry.js if mapping details provided
  let registeredMapping = null;
  if (mapping.docPath && mapping.sectionKey) {
    registeredMapping = await registerS3MediaMapping({
      docPath: mapping.docPath,
      sectionKey: mapping.sectionKey,
      mediaType,
      src: publicUrl,
      alt: mapping.alt || `${mapping.sectionKey} screenshot`,
      caption: mapping.caption || `Uploaded ${file.name} for ${mapping.sectionKey}`,
      metadata: {
        module: mapping.module || "",
        originalFileName: file.name,
      },
    });
  }

  return {
    success: true,
    key: mediaKey,
    mediaKey,
    mediaId: mapping.sectionKey || "overview",
    url: publicUrl,
    publicUrl,
    section,
    mediaType,
    originalFileName: file.name,
    contentType: file.type,
    size: file.size,
    mapping: registeredMapping,
  };
}

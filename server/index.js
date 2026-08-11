import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import {
  generatePresignedUploadUrl,
  registerMediaMapping,
  listMediaObjects,
  deleteMediaObject,
  testS3Connection,
  sanitizeAwsError,
  MEDIA_CONSTRAINTS,
} from "./s3Service.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve local docs-media directory statically for fallback rendering
app.use("/docs-media", express.static(path.resolve(process.cwd(), "docs-media")));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "CargoClave S3 Backend Service" });
});

// Test S3 Connection
app.get("/api/media/verify", async (req, res) => {
  try {
    const result = await testS3Connection();
    res.json(result);
  } catch (error) {
    const errResp = sanitizeAwsError(error);
    res.status(errResp.status).json({ success: false, error: errResp.message });
  }
});

// Generate Presigned Upload URL preserving original filename
app.post("/api/media/presigned-url", async (req, res) => {
  try {
    const { section, mediaType, fileName, contentType, fileSize, metadata } = req.body;

    if (!mediaType || !fileName || !contentType) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: mediaType, fileName, contentType.",
      });
    }

    // Validate size limit if passed
    if (fileSize && MEDIA_CONSTRAINTS[mediaType]) {
      const maxSize = MEDIA_CONSTRAINTS[mediaType].maxSizeBytes;
      if (fileSize > maxSize) {
        const maxMb = Math.round(maxSize / (1024 * 1024));
        return res.status(400).json({
          success: false,
          error: `File size exceeds the limit of ${maxMb} MB for ${mediaType}s.`,
        });
      }
    }

    const data = await generatePresignedUploadUrl({
      section: section || "general",
      mediaType,
      fileName,
      contentType,
      metadata: metadata || {},
    });

    res.json({ success: true, ...data });
  } catch (error) {
    if (error.status && error.message) {
      return res.status(error.status).json({ success: false, error: error.message });
    }
    const errResp = sanitizeAwsError(error);
    res.status(errResp.status).json({ success: false, error: errResp.message });
  }
});

// Register / Bind S3 Uploaded Media URL to mediaRegistry.js
app.post("/api/media/register", async (req, res) => {
  try {
    const { docPath, sectionKey, mediaType, src, alt, caption, metadata } = req.body;

    if (!docPath || !sectionKey || !src) {
      return res.status(400).json({
        success: false,
        error: "docPath, sectionKey, and src are required to register media mapping.",
      });
    }

    const result = await registerMediaMapping({
      docPath,
      sectionKey,
      mediaType: mediaType || "image",
      src,
      alt,
      caption,
      metadata,
    });

    res.json(result);
  } catch (error) {
    if (error.status && error.message) {
      return res.status(error.status).json({ success: false, error: error.message });
    }
    const errResp = sanitizeAwsError(error);
    res.status(errResp.status).json({ success: false, error: errResp.message });
  }
});

// List Media Objects
app.get("/api/media/list", async (req, res) => {
  try {
    const prefix = req.query.prefix || "";
    const items = await listMediaObjects(prefix);
    res.json({ success: true, count: items.length, items });
  } catch (error) {
    const errResp = sanitizeAwsError(error);
    res.status(errResp.status).json({ success: false, error: errResp.message });
  }
});

// Delete Media Object
app.delete("/api/media/delete", async (req, res) => {
  try {
    const { mediaKey } = req.body;
    if (!mediaKey) {
      return res.status(400).json({ success: false, error: "mediaKey is required." });
    }

    const result = await deleteMediaObject(mediaKey);
    res.json(result);
  } catch (error) {
    if (error.status && error.message) {
      return res.status(error.status).json({ success: false, error: error.message });
    }
    const errResp = sanitizeAwsError(error);
    res.status(errResp.status).json({ success: false, error: error.message });
  }
});

// Replace Media Object
app.post("/api/media/replace", async (req, res) => {
  try {
    const { oldMediaKey, section, mediaType, fileName, contentType, metadata } = req.body;

    if (oldMediaKey) {
      try {
        await deleteMediaObject(oldMediaKey);
      } catch (err) {
        console.warn("[Replace Warn]: Failed to delete old mediaKey:", oldMediaKey);
      }
    }

    const data = await generatePresignedUploadUrl({
      section: section || "general",
      mediaType,
      fileName,
      contentType,
      metadata: metadata || {},
    });

    res.json({ success: true, replaced: Boolean(oldMediaKey), ...data });
  } catch (error) {
    if (error.status && error.message) {
      return res.status(error.status).json({ success: false, error: error.message });
    }
    const errResp = sanitizeAwsError(error);
    res.status(errResp.status).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[CargoClave S3 Backend]: Server listening on http://localhost:${PORT}`);
});

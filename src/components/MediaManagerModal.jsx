import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  X,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Copy,
  Trash2,
  RefreshCw,
  Image as ImageIcon,
  Film,
  Server,
  ExternalLink,
  Loader2,
  FileText,
  Bookmark,
} from "lucide-react";
import {
  checkS3Connection,
  uploadMediaDirectToS3,
  listS3Media,
  deleteS3Media,
} from "../services/s3ClientService";

const DOC_PAGES = [
  { path: "/getting-started/sign-in", label: "Getting Started → Sign In", module: "Getting Started", sectionFolder: "getting-started", defaultKey: "sign-in" },
  { path: "/getting-started/launch", label: "Getting Started → Launch", module: "Getting Started", sectionFolder: "getting-started", defaultKey: "portal" },
  { path: "/getting-started/workflows", label: "Getting Started → Workflows", module: "Getting Started", sectionFolder: "getting-started", defaultKey: "e2e-workflow" },
  { path: "/operations/dashboard", label: "Operations → Dashboard", module: "Operations", sectionFolder: "operations", defaultKey: "overview" },
  { path: "/operations/contracts", label: "Operations → Contracts", module: "Operations", sectionFolder: "operations", defaultKey: "overview" },
  { path: "/operations/inspection-review", label: "Operations → Inspection Review", module: "Operations", sectionFolder: "inspection-review", defaultKey: "overview" },
  { path: "/operations/inspection-review/dashboard", label: "Operations → Review Dashboard", module: "Operations", sectionFolder: "inspection-review", defaultKey: "overview" },
  { path: "/operations/inspection-review/details", label: "Operations → Review Details", module: "Operations", sectionFolder: "inspection-review", defaultKey: "details" },
  { path: "/configuration/surveys", label: "Survey Builder → Overview", module: "Survey Builder", sectionFolder: "survey-builder", defaultKey: "fields" },
  { path: "/configuration/surveys/survey-steps", label: "Survey Builder → Steps", module: "Survey Builder", sectionFolder: "survey-builder", defaultKey: "overview" },
  { path: "/reports/reports-overview", label: "Reports → Overview", module: "Reports", sectionFolder: "report-builder", defaultKey: "overview" },
  { path: "/reports/report-builder", label: "Reports → Builder", module: "Reports", sectionFolder: "report-builder", defaultKey: "overview" },
];

export default function MediaManagerModal({ isOpen, onClose }) {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("upload");
  const [section, setSection] = useState("getting-started");
  const [mediaType, setMediaType] = useState("image");

  // Separate Metadata Mapping Fields
  const [docModule, setDocModule] = useState("Getting Started");
  const [docPath, setDocPath] = useState("/getting-started/sign-in");
  const [sectionKey, setSectionKey] = useState("sign-in");
  const [altText, setAltText] = useState("");
  const [captionText, setCaptionText] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // S3 list state
  const [s3Objects, setS3Objects] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(false);

  // Connection verification state
  const [s3Status, setS3Status] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const [copiedKey, setCopiedKey] = useState(false);

  // Auto-detect page route and set defaults on modal open
  useEffect(() => {
    if (isOpen) {
      handleTestConnection();

      const currentPath = location.pathname;
      const matchedPage = DOC_PAGES.find((p) => p.path === currentPath);
      if (matchedPage) {
        setDocPath(matchedPage.path);
        setDocModule(matchedPage.module);
        setSection(matchedPage.sectionFolder);
        setSectionKey(matchedPage.defaultKey);
      } else if (currentPath.includes("/getting-started/")) {
        setDocPath(currentPath);
        setDocModule("Getting Started");
        setSection("getting-started");
        setSectionKey("overview");
      } else if (currentPath.includes("/operations/")) {
        setDocPath(currentPath);
        setDocModule("Operations");
        setSection("operations");
        setSectionKey("overview");
      }
    }
  }, [isOpen, location.pathname]);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    setIsVerifying(true);
    const res = await checkS3Connection();
    setS3Status(res);
    setIsVerifying(false);
  };

  const handlePageChange = (newPath) => {
    setDocPath(newPath);
    const matched = DOC_PAGES.find((p) => p.path === newPath);
    if (matched) {
      setDocModule(matched.module);
      setSection(matched.sectionFolder);
      setSectionKey(matched.defaultKey);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setUploadResult(null);
    setErrorMessage(null);
    setUploadProgress(0);

    const isVid = file.type.startsWith("video/");
    setMediaType(isVid ? "video" : "image");

    if (!altText) setAltText(`${file.name} UI screenshot`);
    if (!captionText) setCaptionText(`Uploaded asset ${file.name}`);

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const handleStartUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);
    setErrorMessage(null);
    setUploadResult(null);

    try {
      const result = await uploadMediaDirectToS3({
        file: selectedFile, // Original filename preserved!
        section,
        mediaType,
        mapping: {
          module: docModule,
          docPath,
          sectionKey,
          alt: altText,
          caption: captionText,
        },
        onProgress: (percent) => setUploadProgress(percent),
      });

      setUploadResult(result);
      if (activeTab === "list") fetchList();
    } catch (err) {
      setErrorMessage(err.message || "Upload failed. Please check S3 backend service connection.");
    } finally {
      setIsUploading(false);
    }
  };

  const fetchList = async () => {
    setIsLoadingList(true);
    const res = await listS3Media(section);
    if (res.success) {
      setS3Objects(res.items || []);
    } else {
      setS3Objects([]);
    }
    setIsLoadingList(false);
  };

  const handleDeleteItem = async (key) => {
    if (!window.confirm(`Are you sure you want to delete '${key}' from S3?`)) return;

    const res = await deleteS3Media(key);
    if (res.success) {
      fetchList();
      if (uploadResult?.mediaKey === key) {
        setUploadResult(null);
      }
    } else {
      alert(res.error || "Failed to delete item.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] shadow-2xl text-ink-900 dark:text-[#E5E5E5]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink-900/10 dark:border-[#262626] px-5 py-4 bg-ink-900/[0.02] dark:bg-[#121212]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
              <UploadCloud size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-ink-900 dark:text-white">AWS S3 Media Management</h3>
              <p className="text-[11px] text-ink-500 dark:text-[#A3A3A3]">Preserve original filenames &amp; configure documentation mapping</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-500 hover:bg-ink-900/5 dark:hover:bg-[#262626] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Connection Bar */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#000000] text-xs">
          <div className="flex items-center gap-2">
            <Server size={14} className="text-cyan-500" />
            <span className="text-ink-650 dark:text-[#A3A3A3]">S3 Bucket:</span>
            <code className="px-1.5 py-0.5 rounded bg-ink-900/5 dark:bg-[#1a1a1a] text-cyan-600 dark:text-cyan-400 font-mono text-[11px]">
              {s3Status?.bucket || "cargoclave-docs-media"}
            </code>
          </div>
          <div className="flex items-center gap-2">
            {isVerifying ? (
              <span className="flex items-center gap-1 text-[11px] text-amber-500">
                <Loader2 size={12} className="animate-spin" /> Verifying...
              </span>
            ) : s3Status?.success ? (
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500">
                <CheckCircle2 size={12} /> Connected
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[11px] font-semibold text-rose-500">
                <AlertCircle size={12} /> Disconnected
              </span>
            )}
            <button
              onClick={handleTestConnection}
              title="Re-verify S3 Connection"
              className="p-1 rounded hover:bg-ink-900/10 dark:hover:bg-[#262626] text-ink-500 transition-colors"
            >
              <RefreshCw size={12} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-ink-900/10 dark:border-[#262626] px-5 bg-ink-900/[0.01] dark:bg-[#000000] text-xs">
          <button
            onClick={() => setActiveTab("upload")}
            className={`px-4 py-2.5 font-medium border-b-2 transition-colors ${
              activeTab === "upload"
                ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                : "border-transparent text-ink-600 dark:text-[#A3A3A3] hover:text-ink-900 dark:hover:text-white"
            }`}
          >
            Direct S3 Upload &amp; Mapping
          </button>
          <button
            onClick={() => {
              setActiveTab("list");
              fetchList();
            }}
            className={`px-4 py-2.5 font-medium border-b-2 transition-colors ${
              activeTab === "list"
                ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                : "border-transparent text-ink-600 dark:text-[#A3A3A3] hover:text-ink-900 dark:hover:text-white"
            }`}
          >
            Browse S3 Bucket
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 max-h-[65vh] overflow-y-auto doc-scroll text-xs">
          {activeTab === "upload" && (
            <div className="space-y-4">
              {/* File Dropzone */}
              <div className="relative border-2 border-dashed border-ink-900/15 dark:border-[#333] rounded-xl p-4 text-center bg-ink-900/[0.01] dark:bg-[#000000] hover:border-cyan-500/50 transition-colors">
                <input
                  type="file"
                  accept={mediaType === "image" ? "image/png,image/jpeg,image/webp" : "video/mp4"}
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud size={24} className="mx-auto text-cyan-500 mb-1" />
                <p className="font-semibold text-ink-800 dark:text-slate-200">
                  {selectedFile ? selectedFile.name : `Select local screenshot or video (Original filename preserved!)`}
                </p>
                <p className="text-[11px] text-ink-500 dark:text-[#A3A3A3] mt-0.5">
                  Original file names will be preserved exactly in S3 without renaming.
                </p>
              </div>

              {/* Documentation Mapping Parameters Grid */}
              <div className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#111111] space-y-3">
                <div className="flex items-center gap-1.5 font-bold text-ink-900 dark:text-white border-b border-ink-900/10 dark:border-[#262626] pb-2">
                  <Bookmark size={14} className="text-cyan-500" /> Documentation Metadata &amp; Mapping
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-ink-800 dark:text-slate-200 mb-1">
                      Documentation Page Path
                    </label>
                    <select
                      value={docPath}
                      onChange={(e) => handlePageChange(e.target.value)}
                      className="w-full rounded-lg border border-ink-900/10 dark:border-[#333] bg-white dark:bg-[#141414] px-3 py-1.5 text-xs focus:border-cyan-500 outline-none"
                    >
                      {DOC_PAGES.map((p) => (
                        <option key={p.path} value={p.path}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-ink-800 dark:text-slate-200 mb-1">
                      Section / Media Reference Key
                    </label>
                    <input
                      type="text"
                      value={sectionKey}
                      onChange={(e) => setSectionKey(e.target.value)}
                      placeholder="e.g., sign-in, overview, creation-commercial"
                      className="w-full rounded-lg border border-ink-900/10 dark:border-[#333] bg-white dark:bg-[#141414] px-3 py-1.5 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink-800 dark:text-slate-200 mb-1">
                      Documentation Module
                    </label>
                    <input
                      type="text"
                      value={docModule}
                      onChange={(e) => setDocModule(e.target.value)}
                      placeholder="e.g., Getting Started, Operations"
                      className="w-full rounded-lg border border-ink-900/10 dark:border-[#333] bg-white dark:bg-[#141414] px-3 py-1.5 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink-800 dark:text-slate-200 mb-1">
                      S3 Folder Section
                    </label>
                    <select
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      className="w-full rounded-lg border border-ink-900/10 dark:border-[#333] bg-white dark:bg-[#141414] px-3 py-1.5 text-xs focus:border-cyan-500 outline-none"
                    >
                      <option value="getting-started">getting-started</option>
                      <option value="operations">operations</option>
                      <option value="inspection-template">inspection-template</option>
                      <option value="survey-builder">survey-builder</option>
                      <option value="inspection-review">inspection-review</option>
                      <option value="report-builder">report-builder</option>
                      <option value="general">general</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block font-semibold text-ink-800 dark:text-slate-200 mb-1">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      value={altText}
                      onChange={(e) => setAltText(e.target.value)}
                      placeholder="Alt description for screen readers"
                      className="w-full rounded-lg border border-ink-900/10 dark:border-[#333] bg-white dark:bg-[#141414] px-3 py-1.5 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink-800 dark:text-slate-200 mb-1">
                      Caption
                    </label>
                    <input
                      type="text"
                      value={captionText}
                      onChange={(e) => setCaptionText(e.target.value)}
                      placeholder="UI caption shown under documentation image"
                      className="w-full rounded-lg border border-ink-900/10 dark:border-[#333] bg-white dark:bg-[#141414] px-3 py-1.5 text-xs focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Selected File Preview & Action */}
              {selectedFile && (
                <div className="p-3.5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#121212] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-ink-900 dark:text-white flex items-center gap-1.5">
                        <FileText size={14} className="text-cyan-500" /> {selectedFile.name}
                      </p>
                      <p className="text-[11px] text-ink-500 dark:text-[#A3A3A3]">
                        Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB | S3 Target: <code className="font-mono text-cyan-400">{section}/{mediaType}s/{selectedFile.name}</code>
                      </p>
                    </div>
                    <button
                      onClick={handleStartUpload}
                      disabled={isUploading}
                      className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 size={14} className="animate-spin" /> Uploading {uploadProgress}%
                        </>
                      ) : (
                        <>
                          <UploadCloud size={14} /> Upload &amp; Register Mapping
                        </>
                      )}
                    </button>
                  </div>

                  {/* Progress Bar */}
                  {isUploading && (
                    <div className="w-full bg-ink-900/10 dark:bg-[#262626] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan-500 h-full transition-all duration-200"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  )}

                  {/* Live Media Preview */}
                  {previewUrl && (
                    <div className="mt-2 rounded-lg overflow-hidden border border-ink-900/10 dark:border-[#262626] max-h-40 flex items-center justify-center bg-black">
                      {mediaType === "image" ? (
                        <img src={previewUrl} alt="Preview" className="max-h-36 object-contain" />
                      ) : (
                        <video src={previewUrl} controls className="max-h-36 w-full" />
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Upload Error</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Success Result Box */}
              {uploadResult && (
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 size={16} /> S3 Upload &amp; Registry Mapping Complete!
                  </div>
                  <div className="space-y-1 font-mono text-[11px] bg-black/40 p-2.5 rounded-lg border border-emerald-500/20">
                    <div className="flex items-center justify-between">
                      <span className="opacity-75">"success":</span>
                      <span className="text-emerald-400 font-bold">true</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="opacity-75">"key":</span>
                      <code className="text-emerald-300">"{uploadResult.key || uploadResult.mediaKey}"</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="opacity-75">"mediaId":</span>
                      <code className="text-emerald-300">"{uploadResult.mediaId || sectionKey}"</code>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="opacity-75">"url":</span>
                      <a
                        href={uploadResult.url || uploadResult.publicUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate text-emerald-300 underline hover:text-emerald-200"
                      >
                        "{uploadResult.url || uploadResult.publicUrl}"
                      </a>
                    </div>
                  </div>
                  <div className="pt-1 flex gap-2">
                    <button
                      onClick={() => copyToClipboard(uploadResult.url || uploadResult.publicUrl)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-medium text-[11px] flex items-center gap-1.5 hover:bg-emerald-500 transition-colors"
                    >
                      <Copy size={12} /> {copiedKey ? "Copied S3 URL!" : "Copy S3 URL"}
                    </button>
                    <a
                      href={uploadResult.url || uploadResult.publicUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/20 font-medium text-[11px] flex items-center gap-1 hover:bg-emerald-500/30 transition-colors"
                    >
                      <ExternalLink size={12} /> View S3 Asset
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "list" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-ink-800 dark:text-slate-200">
                  Objects in <code className="text-cyan-500 font-mono">{section}/</code>
                </p>
                <button
                  onClick={fetchList}
                  className="px-2.5 py-1 rounded bg-ink-900/5 dark:bg-[#1a1a1a] hover:bg-ink-900/10 text-ink-700 dark:text-[#A3A3A3] text-xs flex items-center gap-1"
                >
                  <RefreshCw size={12} /> Refresh
                </button>
              </div>

              {isLoadingList ? (
                <div className="py-8 text-center text-ink-500 dark:text-[#A3A3A3]">
                  <Loader2 size={20} className="animate-spin mx-auto mb-2" /> Fetching S3 bucket objects...
                </div>
              ) : s3Objects.length === 0 ? (
                <div className="py-8 text-center text-ink-500 dark:text-[#A3A3A3] border border-dashed border-ink-900/10 dark:border-[#262626] rounded-xl">
                  No objects found in <code className="font-mono">{section}/</code>. Upload a file above.
                </div>
              ) : (
                <div className="space-y-2">
                  {s3Objects.map((item) => (
                    <div
                      key={item.key}
                      className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#121212] flex items-center justify-between text-xs gap-3"
                    >
                      <div className="truncate">
                        <p className="font-mono font-bold text-ink-900 dark:text-white truncate">{item.key}</p>
                        <p className="text-[10px] text-ink-500 dark:text-[#A3A3A3]">
                          {(item.size / 1024).toFixed(1)} KB | Modified: {new Date(item.lastModified).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => copyToClipboard(item.url)}
                          title="Copy Public URL"
                          className="p-1.5 rounded hover:bg-ink-900/10 dark:hover:bg-[#262626] text-ink-500 transition-colors"
                        >
                          <Copy size={14} />
                        </button>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          title="View Object"
                          className="p-1.5 rounded hover:bg-ink-900/10 dark:hover:bg-[#262626] text-ink-500 transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                        <button
                          onClick={() => handleDeleteItem(item.key)}
                          title="Delete S3 Object"
                          className="p-1.5 rounded hover:bg-rose-500/20 text-rose-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

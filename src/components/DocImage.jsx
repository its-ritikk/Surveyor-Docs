import React, { useState, useEffect } from "react";
import { Image, ExternalLink, X, Maximize2 } from "lucide-react";
import { mediaRegistry } from "../data/mediaRegistry";

export default function DocImage({ path, imageKey, src, alt, caption, hideCaption = true }) {
  const [imageError, setImageError] = useState(false);
  const [useS3Fallback, setUseS3Fallback] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  let imgObj = null;

  if (path && imageKey && mediaRegistry[path] && mediaRegistry[path][imageKey]) {
    imgObj = mediaRegistry[path][imageKey];
  } else if (src) {
    imgObj = { src, alt: alt || "UI Illustration", caption };
  } else if (path && mediaRegistry[path]) {
    const registryEntry = mediaRegistry[path];
    for (const key in registryEntry) {
      if (registryEntry[key]?.type === "image") {
        imgObj = registryEntry[key];
        break;
      }
    }
  }

  // Handle ESC key press to close fullscreen lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMaximized(false);
    };
    if (isMaximized) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isMaximized]);

  if (!imgObj || !imgObj.src) return null;

  // Derive local asset path dynamically from S3 URL path
  let localSrc = null;
  if (imgObj.src) {
    const urlParts = imgObj.src.split("/");
    const rawFilename = imgObj.metadata?.originalFileName || urlParts[urlParts.length - 1];
    const cleanFilename = decodeURIComponent(rawFilename);
    const sectionFolder = urlParts.length >= 3 ? urlParts[urlParts.length - 3] : "getting-started";

    localSrc = `/docs-media/${sectionFolder}/${cleanFilename}`;
  }

  // Use localSrc first for instant visual rendering in dev mode, or fall back to S3 URL
  const rawSrc = !useS3Fallback && localSrc ? localSrc : encodeURI(imgObj.src);
  const versionTag = imgObj.metadata?.updatedAt ? `?v=${imgObj.metadata.updatedAt}` : "";
  const currentSrc = `${rawSrc}${versionTag}`;

  const handleError = () => {
    if (!useS3Fallback && imgObj.src) {
      setUseS3Fallback(true);
    } else {
      setImageError(true);
    }
  };

  return (
    <>
      {/* CLEAN IMAGE CONTAINER - NO BORDERS & NO BOTTOM COMMENTS */}
      <div className="my-4 overflow-hidden rounded-xl bg-transparent select-none">
        {!imageError ? (
          <div
            onClick={() => setIsMaximized(true)}
            className="relative group cursor-zoom-in overflow-hidden rounded-xl"
            title="Click to maximize image"
          >
            <img
              src={currentSrc}
              alt={imgObj.alt || "UI Illustration"}
              className="w-full h-auto max-h-[640px] object-contain rounded-xl bg-transparent group-hover:scale-[1.006] transition-transform duration-200 shadow-sm border border-ink-900/5 dark:border-[#262626]"
              onError={handleError}
            />
            {/* Hover Expand Overlay Badge */}
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold rounded-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 border border-white/20 shadow-lg backdrop-blur-sm">
                <Maximize2 size={14} /> Click to Maximize
              </span>
            </div>
          </div>
        ) : (
          /* S3 ASSET LINK CARD (Only when image fails to load) */
          <div className="p-4 rounded-xl bg-ink-900/[0.02] dark:bg-[#000000] flex flex-col items-center justify-center text-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 mb-2">
              <Image size={16} />
            </div>
            <h4 className="text-xs font-bold text-ink-900 dark:text-[#FFFFFF]">
              {imgObj.caption || imgObj.alt || "S3 UI Screenshot Asset"}
            </h4>
            <a
              href={imgObj.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ink-900/5 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-ink-900/10 dark:border-cyan-500/30 text-[11px] font-mono hover:bg-cyan-500/20 transition-colors"
            >
              <span className="truncate max-w-xs">{imgObj.src}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        )}

        {/* Optional Caption/Comments Bar - Only shown if explicitly set hideCaption={false} */}
        {imgObj.caption && !imageError && !hideCaption && (
          <div className="mt-2 px-3 py-1.5 text-xs text-ink-650 dark:text-[#A3A3A3] flex items-center justify-between">
            <span>{imgObj.caption}</span>
          </div>
        )}
      </div>

      {/* FULLSCREEN MAXIMIZED LIGHTBOX MODAL */}
      {isMaximized && (
        <div
          onClick={() => setIsMaximized(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(false);
            }}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all shadow-lg border border-white/20"
            title="Close (ESC)"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Maximized Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[95vw] max-h-[88vh] flex flex-col items-center justify-center overflow-hidden"
          >
            <img
              src={currentSrc}
              alt={imgObj.alt || "UI Screenshot"}
              className="max-w-full max-h-[84vh] object-contain rounded-xl shadow-2xl bg-black"
            />
          </div>

          <span className="mt-3 text-[11px] text-slate-400 font-mono tracking-wider uppercase">
            Press ESC or click anywhere to exit
          </span>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import { Image, ExternalLink } from "lucide-react";
import { mediaRegistry } from "../data/mediaRegistry";

export default function DocImage({ path, imageKey, src, alt, caption }) {
  const [imageError, setImageError] = useState(false);

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

  if (!imgObj || !imgObj.src) return null;

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] shadow-sm select-none">
      {!imageError ? (
        <img
          src={imgObj.src}
          alt={imgObj.alt || "UI Illustration"}
          className="w-full aspect-[16/9] object-cover bg-ink-900/5 dark:bg-[#000000]"
          onError={() => setImageError(true)}
        />
      ) : (
        /* S3 ASSET LINK CARD (NO FAKE / DEMO PHOTOS) */
        <div className="p-5 bg-ink-900/[0.02] dark:bg-[#000000] flex flex-col items-center justify-center text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 mb-2.5">
            <Image size={18} />
          </div>
          <h4 className="text-xs font-bold text-ink-900 dark:text-[#FFFFFF]">
            {imgObj.caption || imgObj.alt || "S3 UI Screenshot Asset"}
          </h4>
          <p className="mt-1 text-[11px] text-ink-500 dark:text-[#A3A3A3]">
            Live PNG screenshot asset hosted on CargoClave S3 storage.
          </p>
          <a
            href={imgObj.src}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ink-900/5 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-ink-900/10 dark:border-cyan-500/30 text-[11px] font-mono hover:bg-cyan-500/20 transition-colors"
          >
            <span className="truncate max-w-xs">{imgObj.src}</span>
            <ExternalLink size={12} />
          </a>
        </div>
      )}

      {imgObj.caption && !imageError && (
        <div className="border-t border-ink-900/5 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#000000] px-4 py-2.5 text-xs text-ink-650 dark:text-[#A3A3A3] flex items-center justify-between">
          <span>{imgObj.caption}</span>
          <span className="text-[10px] uppercase font-mono font-bold text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
            UI Screenshot
          </span>
        </div>
      )}
    </div>
  );
}

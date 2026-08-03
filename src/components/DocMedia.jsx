import React, { useState } from "react";

export default function DocMedia({ type = "image", src, alt = "Media representation", caption }) {
  const [error, setError] = useState(false);

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.01]">
      <div className="p-1 select-none">
        {error ? (
          <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg bg-ink-900/5 dark:bg-white/5 border-2 border-dashed border-ink-900/10 dark:border-white/10 p-6 text-center">
            <svg
              className="mx-auto h-10 w-10 text-ink-500/60 dark:text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-semibold text-ink-700 dark:text-slate-400">
              Visual Asset Unavailable
            </h3>
            <p className="mt-1 text-xs text-ink-500 dark:text-slate-500 max-w-sm">
              S3 bucket item <code className="px-1 py-0.5 rounded bg-ink-900/10 dark:bg-white/15 text-[11px] font-mono select-all">{src}</code> could not be loaded. Showing documentation placeholder.
            </p>
          </div>
        ) : type === "video" ? (
          <video
            controls
            src={src}
            className="w-full rounded-lg aspect-video object-cover"
            onError={() => setError(true)}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full rounded-lg object-cover"
            onError={() => setError(true)}
          />
        )}
      </div>
      {(caption || error) && (
        <div className="border-t border-ink-900/5 dark:border-white/5 bg-ink-900/[0.02] dark:bg-white/[0.02] px-4 py-2 text-xs text-ink-500 dark:text-slate-400 flex items-center justify-between select-none">
          <span>{caption || alt}</span>
          {error && (
            <span className="text-[10px] uppercase tracking-wider font-bold text-buoy-amber px-2 py-0.5 rounded bg-buoy-amber/15 select-none">
              S3 Asset Placeholder
            </span>
          )}
        </div>
      )}
    </div>
  );
}

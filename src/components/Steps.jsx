export default function Steps({ steps }) {
  return (
    <ol className="my-6 space-y-0">
      {steps.map((s, i) => (
        <li key={i} className="relative pl-10 pb-6 last:pb-0">
          {i !== steps.length - 1 && (
            <span className="absolute left-[15px] top-7 bottom-0 w-px bg-ink-900/10 dark:bg-white/10" />
          )}
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-signal-600 dark:bg-signal-700 text-white text-[13px] font-semibold font-display">
            {i + 1}
          </span>
          <p className="text-[14.5px] font-semibold text-ink-900 dark:text-slate-100 mb-1 pt-1">
            {s.title}
          </p>
          {s.desc && (
            <div className="text-[14.5px] leading-7 text-ink-700/90 dark:text-slate-300/90 [&>p]:mb-2 [&>p:last-child]:mb-0">
              {s.desc}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

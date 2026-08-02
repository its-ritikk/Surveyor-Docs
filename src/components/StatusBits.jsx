const colorMap = {
  slate: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
  amber: "bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-700/50",
  teal: "bg-signal-50 dark:bg-signal-900/30 text-signal-700 dark:text-signal-300 border-signal-200 dark:border-signal-700/50",
  green: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50",
  red: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700/50",
  purple: "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50",
};

export function StatusBadge({ color = "slate", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11.5px] font-semibold ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}

export function StatusTable({ rows }) {
  return (
    <div className="my-5 overflow-hidden rounded-lg border border-ink-900/10 dark:border-white/10">
      <table className="w-full border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-ink-900/[0.03] dark:bg-white/[0.03]">
            <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-slate-200 border-b border-ink-900/10 dark:border-white/10 w-[30%]">
              Status
            </th>
            <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-slate-200 border-b border-ink-900/10 dark:border-white/10">
              Meaning
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-ink-900/[0.06] dark:border-white/[0.06] last:border-0 even:bg-ink-900/[0.012] dark:even:bg-white/[0.02]"
            >
              <td className="px-4 py-2.5 align-top">
                <StatusBadge color={r.color}>{r.label}</StatusBadge>
              </td>
              <td className="px-4 py-2.5 align-top text-ink-700/90 dark:text-slate-300/90 leading-6">
                {r.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

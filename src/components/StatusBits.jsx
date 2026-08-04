const colorMap = {
  slate: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
  blue: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30",
  amber: "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30",
  teal: "bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border-cyan-500/30",
  green: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
  red: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30",
  purple: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/30",
};

export function StatusBadge({ color = "slate", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold transition-colors duration-150 ${colorMap[color] || colorMap.slate}`}
    >
      {children}
    </span>
  );
}

export function StatusTable({ rows }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#000000] shadow-sm">
      <table className="w-full border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-ink-900/[0.02] dark:bg-[#0A0A0A]">
            <th className="px-4 py-3 font-semibold text-ink-900 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626] w-[30%]">
              Status
            </th>
            <th className="px-4 py-3 font-semibold text-ink-900 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626]">
              Meaning
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-ink-900/[0.06] dark:border-[#262626] last:border-0 hover:bg-ink-900/[0.02] dark:hover:bg-[#171717]/50 transition-colors"
            >
              <td className="px-4 py-3 align-top">
                <StatusBadge color={r.color}>{r.label}</StatusBadge>
              </td>
              <td className="px-4 py-3 align-top text-ink-700/90 dark:text-[#A3A3A3] leading-6">
                {r.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

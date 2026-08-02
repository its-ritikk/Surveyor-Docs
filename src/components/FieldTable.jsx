export default function FieldTable({ rows }) {
  return (
    <div className="my-5 overflow-hidden rounded-lg border border-ink-900/10 dark:border-white/10">
      <table className="w-full border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-ink-900/[0.03] dark:bg-white/[0.03]">
            <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-slate-200 border-b border-ink-900/10 dark:border-white/10 w-[26%]">
              Field
            </th>
            <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-slate-200 border-b border-ink-900/10 dark:border-white/10 w-[12%]">
              Required
            </th>
            <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-slate-200 border-b border-ink-900/10 dark:border-white/10">
              Description &amp; validation
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-ink-900/[0.06] dark:border-white/[0.06] last:border-0 even:bg-ink-900/[0.012] dark:even:bg-white/[0.02]"
            >
              <td className="px-4 py-2.5 align-top font-mono text-[12.5px] text-ink-900 dark:text-slate-200 font-medium">
                {r.field}
              </td>
              <td className="px-4 py-2.5 align-top">
                {r.required ? (
                  <span className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[11px] font-semibold px-2 py-0.5 border border-red-200 dark:border-red-700/50">
                    Required
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-ink-900/5 dark:bg-white/10 text-ink-500 dark:text-slate-400 text-[11px] font-semibold px-2 py-0.5">
                    Optional
                  </span>
                )}
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

export default function FieldTable({ rows = [] }) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] shadow-sm transition-colors">
      <table className="w-full border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-ink-900/[0.03] dark:bg-[#000000]">
            <th className="px-4 py-3 font-semibold text-ink-800 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626] w-[26%]">
              Field
            </th>
            <th className="px-4 py-3 font-semibold text-ink-800 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626] w-[14%]">
              Required
            </th>
            <th className="px-4 py-3 font-semibold text-ink-800 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626]">
              Description &amp; validation
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const fieldName = r.field || r.name || "—";
            const isRequired = Boolean(r.required === true || r.req === true);

            return (
              <tr
                key={i}
                className="border-b border-ink-900/[0.06] dark:border-[#262626] last:border-0 even:bg-ink-900/[0.012] dark:even:bg-[#171717]/40 transition-colors"
              >
                <td className="px-4 py-3 align-top font-mono text-[12.5px] text-ink-900 dark:text-[#FFFFFF] font-semibold">
                  {fieldName}
                </td>
                <td className="px-4 py-3 align-top">
                  {isRequired ? (
                    <span className="inline-flex items-center rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[11px] font-semibold px-2 py-0.5 border border-rose-200 dark:border-rose-800/50">
                      Required
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-ink-900/5 dark:bg-[#171717] text-ink-500 dark:text-[#A3A3A3] text-[11px] font-semibold px-2 py-0.5 border border-transparent dark:border-[#262626]">
                      Optional
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 align-top text-ink-700/90 dark:text-[#E5E5E5] leading-6">
                  {r.desc}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

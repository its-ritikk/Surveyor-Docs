import { Info, Lightbulb, TriangleAlert, ShieldAlert, CheckCircle2 } from "lucide-react";

const styles = {
  note: {
    wrap: "border-cyan-500/30 bg-cyan-500/[0.03] dark:border-cyan-500/30 dark:bg-cyan-500/[0.04] shadow-sm",
    icon: "text-cyan-600 dark:text-cyan-400",
    title: "text-cyan-900 dark:text-cyan-400",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: Info,
    label: "Note",
  },
  tip: {
    wrap: "border-amber-500/30 bg-amber-500/[0.03] dark:border-amber-500/30 dark:bg-amber-500/[0.04] shadow-sm",
    icon: "text-amber-600 dark:text-amber-400",
    title: "text-amber-900 dark:text-amber-300",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: Lightbulb,
    label: "Tip",
  },
  warning: {
    wrap: "border-orange-500/30 bg-orange-500/[0.03] dark:border-orange-500/30 dark:bg-orange-500/[0.04] shadow-sm",
    icon: "text-orange-600 dark:text-orange-400",
    title: "text-orange-900 dark:text-orange-300",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: TriangleAlert,
    label: "Warning",
  },
  danger: {
    wrap: "border-rose-500/30 bg-rose-500/[0.03] dark:border-rose-500/30 dark:bg-rose-500/[0.04] shadow-sm",
    icon: "text-rose-600 dark:text-rose-400",
    title: "text-rose-900 dark:text-rose-300",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: ShieldAlert,
    label: "Important",
  },
  important: {
    wrap: "border-rose-500/30 bg-rose-500/[0.03] dark:border-rose-500/30 dark:bg-rose-500/[0.04] shadow-sm",
    icon: "text-rose-600 dark:text-rose-400",
    title: "text-rose-900 dark:text-rose-300",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: ShieldAlert,
    label: "Important",
  },
  "best-practice": {
    wrap: "border-emerald-500/30 bg-emerald-500/[0.03] dark:border-emerald-500/30 dark:bg-emerald-500/[0.04] shadow-sm",
    icon: "text-emerald-600 dark:text-emerald-400",
    title: "text-emerald-900 dark:text-emerald-300",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: CheckCircle2,
    label: "Best Practice",
  },
  success: {
    wrap: "border-emerald-500/30 bg-emerald-500/[0.03] dark:border-emerald-500/30 dark:bg-emerald-500/[0.04] shadow-sm",
    icon: "text-emerald-600 dark:text-emerald-400",
    title: "text-emerald-900 dark:text-emerald-300",
    body: "text-ink-700/90 dark:text-[#E5E5E5]",
    Icon: CheckCircle2,
    label: "Best Practice",
  },
};

export default function Callout({ type = "note", title, children }) {
  const s = styles[type] || styles.note;
  const { Icon } = s;
  return (
    <div className={`my-5 flex gap-3 rounded-xl border px-4 py-3.5 ${s.wrap} transition-colors`}>
      <Icon size={18} className={`mt-0.5 shrink-0 ${s.icon}`} />
      <div className="min-w-0">
        <p className={`text-sm font-semibold mb-0.5 ${s.title}`}>
          {title || s.label}
        </p>
        <div className={`text-[14px] leading-6 [&>p]:mb-1.5 [&>p:last-child]:mb-0 ${s.body}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

import { Info, Lightbulb, TriangleAlert, ShieldAlert } from "lucide-react";

const styles = {
  note: {
    wrap: "border-signal-200 bg-signal-50 dark:border-signal-700/50 dark:bg-signal-900/20",
    icon: "text-signal-600 dark:text-signal-400",
    title: "text-signal-800 dark:text-signal-300",
    body: "text-ink-700/90 dark:text-slate-300/90",
    Icon: Info,
    label: "Note",
  },
  tip: {
    wrap: "border-amber-200 bg-amber-50 dark:border-amber-700/50 dark:bg-amber-900/20",
    icon: "text-buoy-amber dark:text-amber-400",
    title: "text-amber-900 dark:text-amber-300",
    body: "text-ink-700/90 dark:text-slate-300/90",
    Icon: Lightbulb,
    label: "Tip",
  },
  warning: {
    wrap: "border-orange-200 bg-orange-50 dark:border-orange-700/50 dark:bg-orange-900/20",
    icon: "text-orange-600 dark:text-orange-400",
    title: "text-orange-900 dark:text-orange-300",
    body: "text-ink-700/90 dark:text-slate-300/90",
    Icon: TriangleAlert,
    label: "Caution",
  },
  danger: {
    wrap: "border-red-200 bg-red-50 dark:border-red-700/50 dark:bg-red-900/20",
    icon: "text-red-600 dark:text-red-400",
    title: "text-red-900 dark:text-red-300",
    body: "text-ink-700/90 dark:text-slate-300/90",
    Icon: ShieldAlert,
    label: "Important",
  },
};

export default function Callout({ type = "note", title, children }) {
  const s = styles[type] || styles.note;
  const { Icon } = s;
  return (
    <div className={`my-5 flex gap-3 rounded-lg border px-4 py-3.5 ${s.wrap}`}>
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

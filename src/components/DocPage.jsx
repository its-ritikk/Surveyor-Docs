import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { flatNav } from "../data/nav";

export function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function DocPage({
  eyebrow,
  title,
  description,
  toc = [],
  children,
  path,
}) {
  const idx = flatNav.findIndex((i) => i.to === path);
  const prev = idx > 0 ? flatNav[idx - 1] : null;
  const next = idx >= 0 && idx < flatNav.length - 1 ? flatNav[idx + 1] : null;

  return (
    <div className="flex gap-10 xl:gap-14 mx-auto max-w-[68rem] w-full">
      <div className="min-w-0 flex-1 max-w-3xl">
        <header className="mb-10">
          {eyebrow && (
            <p className="text-[13px] font-semibold text-signal-600 dark:text-signal-500 tracking-wide uppercase mb-2">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl md:text-[34px] font-bold text-ink-900 dark:text-slate-100 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-[16px] leading-7 text-ink-700/80 dark:text-slate-400 max-w-2xl">
              {description}
            </p>
          )}
        </header>

        <div className="prose-doc">{children}</div>

        <div className="mt-16 flex items-stretch justify-between gap-4 border-t border-ink-900/10 dark:border-white/10 pt-6">
          {prev ? (
            <Link
              to={prev.to}
              className="group flex-1 rounded-lg border border-ink-900/10 dark:border-white/10 px-4 py-3 hover:border-signal-300 dark:hover:border-signal-600 hover:bg-signal-50/50 dark:hover:bg-signal-900/20 transition-colors"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500 dark:text-slate-500 uppercase tracking-wide">
                <ArrowLeft size={12} /> Previous
              </span>
              <span className="mt-1 block text-[14px] font-semibold text-ink-800 dark:text-slate-200 group-hover:text-signal-700 dark:group-hover:text-signal-400">
                {prev.label}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              to={next.to}
              className="group flex-1 rounded-lg border border-ink-900/10 dark:border-white/10 px-4 py-3 text-right hover:border-signal-300 dark:hover:border-signal-600 hover:bg-signal-50/50 dark:hover:bg-signal-900/20 transition-colors"
            >
              <span className="flex items-center justify-end gap-1.5 text-[11px] font-semibold text-ink-500 dark:text-slate-500 uppercase tracking-wide">
                Next <ArrowRight size={12} />
              </span>
              <span className="mt-1 block text-[14px] font-semibold text-ink-800 dark:text-slate-200 group-hover:text-signal-700 dark:group-hover:text-signal-400">
                {next.label}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>

      {toc.length > 0 && (
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-24">
            <p className="text-[11px] font-semibold text-ink-500 dark:text-slate-500 uppercase tracking-wide mb-3">
              On this page
            </p>
            <ul className="space-y-2 border-l border-ink-900/10 dark:border-white/10">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="block pl-3.5 -ml-px border-l border-transparent hover:border-signal-500 text-[13px] text-ink-600 dark:text-slate-400 hover:text-signal-700 dark:hover:text-signal-400 transition-colors leading-5 py-0.5"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}

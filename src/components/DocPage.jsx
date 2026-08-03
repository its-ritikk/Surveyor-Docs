import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nav, flatNav } from "../data/nav";
import { useHeadings as useDocHeadings } from "../context/HeadingsContext";
import { mediaRegistry } from "../data/mediaRegistry";
import DocMedia from "./DocMedia";

export function Section({ id, title, children }) {
  const location = useLocation();
  const pageMedia = mediaRegistry[location.pathname];
  const sectionMedia = pageMedia ? pageMedia[id] : null;

  return (
    <section className="mb-14 scroll-mt-24">
      <h2 id={id} className="scroll-mt-24">
        {title}
      </h2>
      {sectionMedia && (
        <DocMedia
          type={sectionMedia.type}
          src={sectionMedia.src}
          alt={sectionMedia.alt || title}
          caption={sectionMedia.caption}
        />
      )}
      {children}
    </section>
  );
}

export default function DocPage({
  eyebrow,
  title,
  description,
  children,
  path,
}) {
  const idx = flatNav.findIndex((i) => i.to === path);
  const prev = idx > 0 ? flatNav[idx - 1] : null;
  const next = idx >= 0 && idx < flatNav.length - 1 ? flatNav[idx + 1] : null;

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const { headings, activeId } = useDocHeadings();

  // Find breadcrumbs info (group + item)
  const findBreadcrumbInfo = (p) => {
    if (p === "/") {
      return { group: "Getting Started", label: "Introduction" };
    }
    for (const group of nav) {
      const item = group.items.find((i) => i.to === p);
      if (item) {
        return { group: group.heading, label: item.label };
      }
    }
    return null;
  };

  const breadcrumb = findBreadcrumbInfo(path);

  return (
    <div className="flex gap-10 xl:gap-14 mx-auto max-w-[72rem] w-full">
      <div className="min-w-0 flex-1 max-w-3xl">
        {/* Breadcrumbs */}
        {breadcrumb && (
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] font-semibold text-ink-500 dark:text-slate-500 select-none">
            <Link
              to="/"
              className="hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
            >
              Docs
            </Link>
            <span className="text-[10px] text-ink-400 dark:text-slate-600">/</span>
            <span className="text-ink-600 dark:text-slate-400">{breadcrumb.group}</span>
            <span className="text-[10px] text-ink-400 dark:text-slate-600">/</span>
            <span className="text-ink-850 dark:text-slate-200">{breadcrumb.label}</span>
          </nav>
        )}

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

      {headings && headings.length > 0 && (
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto doc-scroll pr-2 pt-1">
            <p className="text-[11px] font-semibold text-ink-500 dark:text-slate-500 uppercase tracking-wide mb-3 select-none">
              On this page
            </p>
            <ul className="space-y-2.5 border-l border-ink-900/10 dark:border-white/10">
              {headings.map((h) => {
                const isActive = activeId === h.id;
                return (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(h.id)?.scrollIntoView({
                          behavior: "smooth",
                        });
                        window.history.pushState(null, "", `#${h.id}`);
                      }}
                      className={`block pl-3.5 -ml-px border-l text-[13px] transition-colors leading-5 py-0.5 ${
                        h.level === 3 ? "pl-6 text-[12px]" : "font-medium"
                      } ${
                        isActive
                          ? "border-signal-500 text-signal-700 dark:text-signal-400 font-semibold"
                          : "border-transparent text-ink-600 dark:text-slate-400 hover:text-signal-700 dark:hover:text-signal-400"
                      }`}
                    >
                      {h.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}

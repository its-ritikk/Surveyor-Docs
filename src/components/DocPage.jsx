import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nav, flatNav } from "../data/nav";
import { useHeadings as useDocHeadings } from "../context/HeadingsContext";
import TutorialVideoCard from "./TutorialVideoCard";
import DocImage from "./DocImage";

export function Section({ id, title, children }) {
  return (
    <section className="mb-14 scroll-mt-24">
      <h2 id={id} className="scroll-mt-24">
        {title}
      </h2>
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
  mediaId,
  toc,
  hideImage = false,
  hideVideo = false,
  noMedia = false,
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

  // Scroll active TOC item into view inside the right sidebar scroll container
  useEffect(() => {
    if (activeId) {
      const activeEl = document.querySelector(`aside a[href="#${activeId}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [activeId]);

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

  // Unified TOC list filtering out any Tutorial Video entries
  const rawList = toc || headings || [];
  const displayHeadings = rawList.filter(
    (h) => h.id !== "tutorial-video" && (h.text || h.label || "").toLowerCase() !== "tutorial video"
  );

  return (
    <div className="flex gap-10 xl:gap-14 mx-auto max-w-[72rem] w-full pb-36">
      <div className="min-w-0 flex-1 max-w-3xl">
        {/* Breadcrumbs */}
        {breadcrumb && (
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] font-semibold text-ink-500 dark:text-[#A3A3A3] select-none">
            <Link
              to="/"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Docs
            </Link>
            <span className="text-[10px] text-ink-400 dark:text-[#737373]">/</span>
            <span className="text-ink-600 dark:text-[#A3A3A3]">{breadcrumb.group}</span>
            <span className="text-[10px] text-ink-400 dark:text-[#737373]">/</span>
            <span className="text-ink-850 dark:text-[#E5E5E5]">{breadcrumb.label}</span>
          </nav>
        )}

        <header className="mb-8">
          {eyebrow && (
            <p className="text-[13px] font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase mb-2">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl md:text-[34px] font-bold text-ink-900 dark:text-[#FFFFFF] leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-[16px] leading-7 text-ink-700/80 dark:text-[#A3A3A3] max-w-2xl">
              {description}
            </p>
          )}

          {/* Render PNG UI Screenshot Illustration from mediaRegistry if registered */}
          {!noMedia && !hideImage && <DocImage path={path} />}
        </header>

        {/* Mobile / Tablet Tutorial Video Companion Placement */}
        {!noMedia && !hideVideo && (
          <div className="block xl:hidden mb-8">
            <TutorialVideoCard path={path} pageTitle={title} mediaId={mediaId} />
          </div>
        )}

        <div className="prose-doc">{children}</div>

        <div className="mt-16 flex items-stretch justify-between gap-4 border-t border-ink-900/10 dark:border-[#262626] pt-6">
          {prev ? (
            <Link
              to={prev.to}
              className="group flex-1 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] px-4 py-3 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-cyan-50/30 dark:hover:bg-[#171717] shadow-sm transition-all"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wide">
                <ArrowLeft size={12} /> Previous
              </span>
              <span className="mt-1 block text-[14px] font-semibold text-ink-800 dark:text-[#E5E5E5] group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                {prev.label}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next && (
            <Link
              to={next.to}
              className="group flex-1 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] px-4 py-3 text-right hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-cyan-50/30 dark:hover:bg-[#171717] shadow-sm transition-all"
            >
              <span className="flex items-center justify-end gap-1.5 text-[11px] font-semibold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wide">
                Next <ArrowRight size={12} />
              </span>
              <span className="mt-1 block text-[14px] font-semibold text-ink-800 dark:text-[#E5E5E5] group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                {next.label}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Right Sidebar: On This Page TOC + Tutorial Video Companion Card */}
      <aside className="hidden xl:block w-64 shrink-0">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] flex flex-col gap-6">
          {displayHeadings.length > 0 && (
            <div className="min-h-0 flex-1 flex flex-col">
              <p className="text-[11px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-3 select-none shrink-0">
                On This Page
              </p>
              <div
                className="doc-scroll overflow-y-auto pr-2 min-h-0 flex-1 outline-none"
                onKeyDown={(e) => {
                  if (["ArrowDown", "ArrowUp"].includes(e.key)) {
                    const focusables = Array.from(
                      e.currentTarget.querySelectorAll("a[href]")
                    ).filter((el) => el.offsetWidth > 0 && el.offsetHeight > 0);

                    if (focusables.length === 0) return;
                    const currIdx = focusables.indexOf(document.activeElement);

                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const nextIdx = currIdx < focusables.length - 1 ? currIdx + 1 : 0;
                      focusables[nextIdx].focus();
                      focusables[nextIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prevIdx = currIdx > 0 ? currIdx - 1 : focusables.length - 1;
                      focusables[prevIdx].focus();
                      focusables[prevIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
                    }
                  }
                }}
              >
                <ul className="space-y-2 border-l border-ink-900/10 dark:border-[#262626] pb-6">
                  {displayHeadings.map((h) => {
                    const isActive = activeId === h.id;
                    const itemText = h.text || h.label || "";
                    return (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(h.id);
                            if (el) {
                              const y = el.getBoundingClientRect().top + window.scrollY - 90;
                              window.scrollTo({ top: y, behavior: "smooth" });
                            }
                            window.history.pushState(null, "", `#${h.id}`);
                          }}
                          className={`block pl-3.5 -ml-px border-l text-[13px] transition-colors leading-5 py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:rounded focus-visible:bg-cyan-500/10 ${
                            h.level === 3 ? "pl-6 text-[12px]" : "font-medium"
                          } ${
                            isActive
                              ? "border-cyan-500 text-cyan-700 dark:text-cyan-400 font-semibold"
                              : "border-transparent text-ink-600 dark:text-[#A3A3A3] hover:text-cyan-600 dark:hover:text-cyan-400"
                          }`}
                        >
                          {itemText}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          {/* Fixed Tutorial Video Companion pinned below TOC */}
          {!noMedia && !hideVideo && (
            <div className="shrink-0 pt-2 border-t border-ink-900/10 dark:border-[#262626]">
              <TutorialVideoCard path={path} pageTitle={title} mediaId={mediaId} />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

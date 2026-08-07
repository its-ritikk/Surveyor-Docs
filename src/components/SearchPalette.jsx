import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, CornerDownLeft, FileText, ChevronRight, Clock, BookOpen, Layers } from "lucide-react";
import { searchIndex } from "../data/searchIndex";

// Popular Hub Pages shown on empty search
const POPULAR_PAGES = [
  { label: "Survey Builder Overview", path: "/configuration/surveys", desc: "Design checklists, field types, and conditional logic." },
  { label: "Inspection Templates", path: "/configuration/inspection-templates/overview", desc: "Build wizard-based master inspection templates." },
  { label: "Reports Ecosystem Overview", path: "/reports/overview", desc: "Unified reporting architecture, templates, and dispatches." },
  { label: "Contract Operations", path: "/operations/contracts", desc: "Manage contracts, assignments, and vessel schedules." },
  { label: "Mobile Surveyor App", path: "/mobile/overview", desc: "Field client execution, offline caching, and media uploads." },
];

export default function SearchPalette({ open, setOpen }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const itemRefs = useRef([]);
  const navigate = useNavigate();

  // Load recent searches on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("surveyor_recent_searches") || "[]");
      setRecentSearches(saved);
    } catch {
      setRecentSearches([]);
    }
  }, []);

  useEffect(() => {
    if (open) {
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  // Global Ctrl+K / Cmd+K and Escape handler
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  // Save recent search helper
  const saveRecentSearch = (q) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 2) return;
    const updated = [trimmed, ...recentSearches.filter((item) => item.toLowerCase() !== trimmed.toLowerCase())].slice(0, 5);
    setRecentSearches(updated);
    try {
      localStorage.setItem("surveyor_recent_searches", JSON.stringify(updated));
    } catch {}
  };

  const removeRecentSearch = (e, searchItem) => {
    e.stopPropagation();
    const updated = recentSearches.filter((item) => item !== searchItem);
    setRecentSearches(updated);
    try {
      localStorage.setItem("surveyor_recent_searches", JSON.stringify(updated));
    } catch {}
  };

  // Clean, fast search filtering logic
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const tokens = q.split(/\s+/).filter(Boolean);

    return searchIndex.filter((item) => {
      const pageName = (item.pageName || "").toLowerCase();
      const sectionName = (item.sectionName || "").toLowerCase();
      const matchedHeading = (item.matchedHeading || "").toLowerCase();
      const keywords = (item.keywords || "").toLowerCase();
      const desc = (item.desc || "").toLowerCase();
      const group = (item.group || "").toLowerCase();
      const fullText = `${pageName} ${sectionName} ${matchedHeading} ${keywords} ${desc} ${group}`;

      return tokens.every((token) => fullText.includes(token));
    });
  }, [query]);

  // Group results by Module
  const groupedResults = useMemo(() => {
    const groups = {};
    filteredResults.forEach((item) => {
      const grp = item.group || "Documentation";
      if (!groups[grp]) groups[grp] = [];
      groups[grp].push(item);
    });

    return Object.entries(groups).map(([groupName, items]) => ({
      groupName,
      items,
    }));
  }, [filteredResults]);

  // Flat array of all search results
  const flatResults = useMemo(() => {
    return groupedResults.flatMap((g) => g.items);
  }, [groupedResults]);

  const navList = useMemo(() => {
    if (!query.trim()) {
      return POPULAR_PAGES.map((hub) => ({ type: "hub", to: hub.path, label: hub.label, desc: hub.desc }));
    }
    return flatResults.map((item) => ({ type: "search", to: item.to, item }));
  }, [query, flatResults]);

  // Reset active index to 0 whenever search query changes
  useEffect(() => {
    setActive(navList.length > 0 ? 0 : -1);
  }, [navList.length, query]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (active >= 0 && itemRefs.current[active]) {
      itemRefs.current[active].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [active]);

  const go = (to) => {
    if (query.trim()) {
      saveRecentSearch(query);
    }

    const [path, hash] = (to || "").split("#");
    navigate(path || to);

    const targetId = hash || "overview";
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.classList.add("heading-highlight-flash");
        setTimeout(() => element.classList.remove("heading-highlight-flash"), 2000);
        if (hash) {
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }, 100);

    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (navList.length > 0) {
        setActive((a) => (a + 1) % navList.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (navList.length > 0) {
        setActive((a) => (a - 1 + navList.length) % navList.length);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0 && navList[active]) {
        go(navList[active].to);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  if (!open) return null;

  let flatIndexCounter = 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Documentation Search Palette"
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/60 dark:bg-black/80 backdrop-blur-sm pt-[10vh] px-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0A0A0A] shadow-2xl ring-1 ring-ink-900/10 dark:ring-[#262626] border border-transparent dark:border-[#262626] overflow-hidden transition-all">
        {/* Search Header Input */}
        <div className="flex items-center gap-3 border-b border-ink-900/10 dark:border-[#262626] px-4 py-3.5 bg-white dark:bg-[#0A0A0A]">
          <Search size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results-listbox"
            aria-activedescendant={active >= 0 ? `search-option-${active}` : undefined}
            placeholder="Search documentation, fields, topics..."
            className="w-full bg-transparent text-[15px] text-ink-900 dark:text-[#FFFFFF] placeholder:text-ink-500/70 dark:placeholder:text-[#737373] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="text-xs text-ink-500 hover:text-ink-900 dark:hover:text-[#FFFFFF] px-2 py-0.5 rounded bg-ink-900/5 dark:bg-[#171717]"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Search Modal"
            className="text-ink-500 dark:text-[#A3A3A3] hover:text-ink-800 dark:hover:text-[#FFFFFF] shrink-0 transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Search Body */}
        <div id="search-results-listbox" role="listbox" className="max-h-[65vh] overflow-y-auto doc-scroll py-2">
          {/* EMPTY QUERY STATE */}
          {!query.trim() && (
            <div className="px-4 py-2 space-y-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2">
                    <Clock size={13} />
                    <span>Recent Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#171717] hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                      >
                        <span>{item}</span>
                        <X
                          size={12}
                          className="hover:text-rose-500 shrink-0"
                          onClick={(e) => removeRecentSearch(e, item)}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Pages */}
              <div>
                <div className="text-xs font-semibold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2">
                  Popular Documentation Hubs
                </div>
                <div className="space-y-1.5">
                  {POPULAR_PAGES.map((hub, idx) => {
                    const itemIndex = flatIndexCounter++;
                    const isSelected = active === itemIndex;

                    return (
                      <button
                        key={idx}
                        id={`search-option-${itemIndex}`}
                        role="option"
                        aria-selected={isSelected}
                        ref={(el) => (itemRefs.current[itemIndex] = el)}
                        onClick={() => go(hub.path)}
                        onMouseEnter={() => setActive(itemIndex)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left ${
                          isSelected
                            ? "bg-cyan-500/10 dark:bg-[#171717] border-cyan-500/40 dark:border-cyan-500/50"
                            : "border-ink-900/5 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] hover:bg-ink-900/[0.02] dark:hover:bg-[#171717]"
                        }`}
                      >
                        <div>
                          <div className={`text-xs font-semibold ${isSelected ? "text-cyan-700 dark:text-cyan-400" : "text-ink-900 dark:text-[#FFFFFF]"}`}>
                            {hub.label}
                          </div>
                          <p className="text-[11.5px] text-ink-500 dark:text-[#A3A3A3] mt-0.5">{hub.desc}</p>
                        </div>
                        <ChevronRight size={14} className={isSelected ? "text-cyan-600 dark:text-cyan-400" : "text-ink-400 dark:text-[#737373]"} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* NO RESULTS FOUND STATE */}
          {query.trim() && flatResults.length === 0 && (
            <div className="px-4 py-8 text-center">
              <BookOpen size={28} className="mx-auto text-ink-400 dark:text-[#737373] mb-2 opacity-60" />
              <p className="text-sm font-semibold text-ink-900 dark:text-[#FFFFFF]">
                No documentation results found for "{query}"
              </p>
              <p className="text-xs text-ink-500 dark:text-[#A3A3A3] mt-1">
                Try searching for general keywords like <strong>survey</strong>, <strong>contract</strong>, <strong>report</strong>, or <strong>mobile</strong>.
              </p>
            </div>
          )}

          {/* GROUPED SEARCH RESULTS */}
          {query.trim() && flatResults.length > 0 && (
            <div className="space-y-3">
              {groupedResults.map((group) => (
                <div key={group.groupName}>
                  {/* Module Group Heading */}
                  <div className="px-4 py-1 flex items-center gap-1.5 text-[11px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider bg-ink-900/[0.02] dark:bg-[#121212] border-y border-ink-900/5 dark:border-[#262626]">
                    <Layers size={12} className="text-cyan-600 dark:text-cyan-400" />
                    <span>{group.groupName}</span>
                  </div>

                  {/* Items inside Group */}
                  <div className="divide-y divide-ink-900/5 dark:divide-[#262626]">
                    {group.items.map((item) => {
                      const itemIndex = flatIndexCounter++;
                      const isSelected = active === itemIndex;

                      return (
                        <button
                          key={`${item.to}-${itemIndex}`}
                          id={`search-option-${itemIndex}`}
                          role="option"
                          aria-selected={isSelected}
                          ref={(el) => (itemRefs.current[itemIndex] = el)}
                          onClick={() => go(item.to)}
                          onMouseEnter={() => setActive(itemIndex)}
                          className={`flex w-full items-start gap-3 px-4 py-2.5 text-left transition-colors relative border-l-2 ${
                            isSelected
                              ? "bg-cyan-500/10 dark:bg-[#171717] border-cyan-500 dark:border-cyan-400"
                              : "border-transparent hover:bg-ink-900/[0.025] dark:hover:bg-[#171717]/60"
                          }`}
                        >
                          <FileText
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              isSelected
                                ? "text-cyan-600 dark:text-cyan-400"
                                : "text-ink-400 dark:text-[#737373]"
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            {/* Breadcrumb Navigation */}
                            <div className="flex items-center gap-1 text-[12px] font-semibold text-cyan-700 dark:text-cyan-400 flex-wrap">
                              <span>{item.pageName}</span>
                              {item.sectionName && (
                                <>
                                  <ChevronRight size={12} className="text-ink-400 dark:text-[#737373] shrink-0" />
                                  <span>{item.sectionName}</span>
                                </>
                              )}
                              {item.matchedHeading && item.matchedHeading !== item.sectionName && item.matchedHeading !== item.pageName && (
                                <>
                                  <ChevronRight size={12} className="text-ink-400 dark:text-[#737373] shrink-0" />
                                  <span className="text-ink-900 dark:text-[#FFFFFF] font-bold">
                                    {item.matchedHeading}
                                  </span>
                                </>
                              )}
                            </div>

                            {/* Description Snippet */}
                            {item.desc && (
                              <p className="mt-0.5 text-[12px] leading-5 text-ink-650 dark:text-[#A3A3A3] line-clamp-1">
                                {item.desc}
                              </p>
                            )}
                          </div>

                          {isSelected && (
                            <CornerDownLeft size={14} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="flex items-center justify-between border-t border-ink-900/10 dark:border-[#262626] px-4 py-2 bg-ink-900/[0.015] dark:bg-[#0A0A0A] text-[11px] text-ink-500 dark:text-[#A3A3A3]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] font-mono">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] font-mono">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] font-mono">ESC</kbd>
              Close
            </span>
          </div>
          <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Surveyor Docs Search</span>
        </div>
      </div>
    </div>
  );
}

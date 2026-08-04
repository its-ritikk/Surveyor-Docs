import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, CornerDownLeft, FileText, ChevronRight, Clock, Sparkles, BookOpen, Layers } from "lucide-react";
import { searchIndex } from "../data/searchIndex";

// Synonyms map for enterprise intelligent search
const SYNONYMS = {
  photo: ["image", "picture", "photograph", "media", "camera", "evidence", "attachment"],
  photos: ["image", "picture", "photograph", "media", "camera", "evidence", "attachment"],
  image: ["photo", "picture", "photograph", "media", "camera", "evidence"],
  picture: ["photo", "image", "photograph", "media", "evidence"],
  report: ["reports", "pdf", "export", "pick report", "survey report", "document"],
  reports: ["report", "pdf", "export", "document"],
  pdf: ["report", "reports", "export", "document", "print"],
  media: ["photo", "image", "attachment", "evidence", "upload"],
  attachment: ["media", "photo", "image", "evidence", "file"],
  checksheet: ["checklist", "survey", "questionnaire", "form"],
  checklist: ["checksheet", "survey", "questionnaire", "form"],
  survey: ["checklist", "checksheet", "questionnaire", "inspection"],
  mobile: ["app", "flutter", "tablet", "smartphone", "offline", "field"],
  app: ["mobile", "flutter", "tablet", "client"],
  contract: ["contracts", "job", "dispatch", "vessel", "consignment"],
  contracts: ["contract", "job", "dispatch", "vessel"],
  log: ["logs", "audit", "history", "activity", "telemetry"],
  logs: ["log", "audit", "history", "activity", "telemetry"],
  audit: ["log", "logs", "history", "security", "compliance"],
  template: ["templates", "inspection", "wizard", "builder"],
  templates: ["template", "inspection", "wizard", "builder"],
};

// Popular Hub Pages shown on empty search
const POPULAR_PAGES = [
  { label: "Survey Builder Overview", path: "/configuration/surveys", desc: "Design checklists, field types, and conditional logic." },
  { label: "Inspection Templates", path: "/configuration/inspection-templates/overview", desc: "Build wizard-based master inspection templates." },
  { label: "Reports Ecosystem Overview", path: "/reports/overview", desc: "Unified reporting architecture, templates, and dispatches." },
  { label: "Contract Operations", path: "/operations/contracts", desc: "Manage contracts, assignments, and vessel schedules." },
  { label: "Mobile Surveyor App", path: "/mobile/overview", desc: "Field client execution, offline caching, and media uploads." },
  { label: "Logs & Analytics", path: "/logs/overview", desc: "Activity telemetry, audit history, and security logs." },
];

const SUGGESTED_PAGES = [
  { label: "Survey Builder", path: "/configuration/surveys" },
  { label: "Reports Ecosystem", path: "/reports/overview" },
  { label: "Mobile Surveyor", path: "/mobile/overview" },
];

// Highlight component for search matching terms
function HighlightText({ text, query }) {
  if (!text) return null;
  if (!query || !query.trim()) return <span>{text}</span>;

  const rawTokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (rawTokens.length === 0) return <span>{text}</span>;

  const expanded = new Set();
  rawTokens.forEach((tok) => {
    expanded.add(tok);
    if (SYNONYMS[tok]) {
      SYNONYMS[tok].forEach((syn) => expanded.add(syn));
    }
  });

  const escapedTokens = Array.from(expanded)
    .filter((t) => t.length >= 2)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (escapedTokens.length === 0) return <span>{text}</span>;

  const regex = new RegExp(`(${escapedTokens.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-semibold px-0.5 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

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

  // Search matching logic with partial matching & synonyms
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const rawTokens = q.split(/\s+/).filter(Boolean);
    const searchTokens = new Set();

    rawTokens.forEach((tok) => {
      searchTokens.add(tok);
      if (SYNONYMS[tok]) {
        SYNONYMS[tok].forEach((syn) => searchTokens.add(syn));
      }
    });

    const tokenArray = Array.from(searchTokens);

    return searchIndex.filter((item) => {
      const pageName = (item.pageName || "").toLowerCase();
      const sectionName = (item.sectionName || "").toLowerCase();
      const matchedHeading = (item.matchedHeading || "").toLowerCase();
      const keywords = (item.keywords || "").toLowerCase();
      const desc = (item.desc || "").toLowerCase();
      const group = (item.group || "").toLowerCase();
      const fullText = `${pageName} ${sectionName} ${matchedHeading} ${keywords} ${desc} ${group}`;

      return tokenArray.some((token) => fullText.includes(token));
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

  // UNIFIED NAVIGABLE LIST (Handles empty query popular hubs, search results, and empty state suggestions)
  const navList = useMemo(() => {
    if (!query.trim()) {
      return POPULAR_PAGES.map((hub) => ({ type: "hub", to: hub.path, label: hub.label, desc: hub.desc }));
    }
    if (flatResults.length > 0) {
      return flatResults.map((item) => ({ type: "search", to: item.to, item }));
    }
    return SUGGESTED_PAGES.map((sug) => ({ type: "suggested", to: sug.path, label: sug.label }));
  }, [query, flatResults]);

  // Reset active index to 0 whenever search query changes
  useEffect(() => {
    setActive(navList.length > 0 ? 0 : -1);
  }, [navList.length, query]);

  // Auto-scroll selected item into view whenever active index changes
  useEffect(() => {
    if (active >= 0 && itemRefs.current[active]) {
      itemRefs.current[active].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [active]);

  // Navigate & Smooth Scroll + Destination Flash Highlight
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

  // Keyboard navigation handler with wrap-around navigation
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
            placeholder="Search documentation, fields, tables, workflows..."
            className="w-full bg-transparent text-[15px] text-ink-900 dark:text-[#FFFFFF] placeholder:text-ink-500/70 dark:placeholder:text-[#737373] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="text-xs text-ink-500 hover:text-ink-900 dark:hover:text-[#FFFFFF] px-1.5 py-0.5 rounded bg-ink-900/5 dark:bg-[#171717]"
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
        <div id="search-results-listbox" role="listbox" className="max-h-[65vh] overflow-y-auto doc-scroll py-3">
          {/* EMPTY QUERY STATE */}
          {!query.trim() && (
            <div className="px-4 space-y-5">
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

              {/* Popular Pages (Navigable Cards) */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2.5">
                  <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400" />
                  <span>Popular Documentation Hubs</span>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
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
                        className={`p-3 text-left rounded-xl border transition-all ${
                          isSelected
                            ? "bg-cyan-500/10 dark:bg-[#171717] border-cyan-500/40 dark:border-cyan-500/50 shadow-sm ring-1 ring-cyan-500/30"
                            : "border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] hover:bg-cyan-500/[0.03] dark:hover:bg-[#171717]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${isSelected ? "text-cyan-700 dark:text-cyan-400" : "text-ink-900 dark:text-[#FFFFFF]"}`}>
                            {hub.label}
                          </span>
                          <ChevronRight size={14} className={isSelected ? "text-cyan-600 dark:text-cyan-400 translate-x-0.5" : "text-ink-400 dark:text-[#737373]"} />
                        </div>
                        <p className="mt-1 text-[11.5px] text-ink-500 dark:text-[#A3A3A3] line-clamp-1">{hub.desc}</p>
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
              <BookOpen size={32} className="mx-auto text-ink-400 dark:text-[#737373] mb-3 opacity-60" />
              <p className="text-sm font-semibold text-ink-900 dark:text-[#FFFFFF]">
                No documentation results found for "{query}"
              </p>
              <p className="text-xs text-ink-500 dark:text-[#A3A3A3] mt-1 max-w-sm mx-auto">
                Try searching for related keywords like <strong>"survey"</strong>, <strong>"contract"</strong>, <strong>"photo"</strong>, <strong>"pdf"</strong>, or <strong>"mobile"</strong>.
              </p>

              <div className="mt-6 text-left border-t border-ink-900/10 dark:border-[#262626] pt-4">
                <p className="text-xs font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2">Suggested Pages:</p>
                <div className="grid gap-2 sm:grid-cols-3 text-xs font-medium">
                  {SUGGESTED_PAGES.map((sug, idx) => {
                    const itemIndex = flatIndexCounter++;
                    const isSelected = active === itemIndex;

                    return (
                      <button
                        key={idx}
                        id={`search-option-${itemIndex}`}
                        role="option"
                        aria-selected={isSelected}
                        ref={(el) => (itemRefs.current[itemIndex] = el)}
                        onClick={() => go(sug.path)}
                        onMouseEnter={() => setActive(itemIndex)}
                        className={`p-2.5 rounded-lg border text-cyan-700 dark:text-cyan-400 transition-all ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-500/50 shadow-sm ring-1 ring-cyan-500/30"
                            : "border-ink-900/10 dark:border-[#262626] hover:bg-cyan-500/10"
                        }`}
                      >
                        {sug.label} →
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* GROUPED SEARCH RESULTS */}
          {query.trim() && flatResults.length > 0 && (
            <div className="space-y-4">
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
                          className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors relative border-l-2 ${
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
                            <div className="flex items-center gap-1 text-[11.5px] font-semibold text-cyan-700 dark:text-cyan-400 flex-wrap">
                              <span><HighlightText text={item.pageName} query={query} /></span>
                              {item.sectionName && (
                                <>
                                  <ChevronRight size={12} className="text-ink-400 dark:text-[#737373] shrink-0" />
                                  <span><HighlightText text={item.sectionName} query={query} /></span>
                                </>
                              )}
                              {item.matchedHeading && item.matchedHeading !== item.sectionName && item.matchedHeading !== item.pageName && (
                                <>
                                  <ChevronRight size={12} className="text-ink-400 dark:text-[#737373] shrink-0" />
                                  <span className="text-ink-900 dark:text-[#FFFFFF] font-bold">
                                    <HighlightText text={item.matchedHeading} query={query} />
                                  </span>
                                </>
                              )}
                            </div>

                            {/* Snippet Description */}
                            {item.desc && (
                              <p className="mt-1 text-[12.5px] leading-5 text-ink-650 dark:text-[#A3A3A3] line-clamp-2">
                                <HighlightText text={item.desc} query={query} />
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
        <div className="flex items-center justify-between border-t border-ink-900/10 dark:border-[#262626] px-4 py-2.5 bg-ink-900/[0.015] dark:bg-[#0A0A0A] text-[11px] text-ink-500 dark:text-[#A3A3A3]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] shadow-2xs font-mono">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] shadow-2xs font-mono">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] shadow-2xs font-mono">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-[#171717] border border-ink-900/10 dark:border-[#262626] shadow-2xs font-mono">ESC</kbd>
              Close
            </span>
          </div>
          <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Surveyor Docs Search</span>
        </div>
      </div>
    </div>
  );
}

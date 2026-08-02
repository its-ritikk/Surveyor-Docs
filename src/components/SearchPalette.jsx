import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, CornerDownLeft, FileText } from "lucide-react";
import { searchIndex } from "../data/searchIndex";

export default function SearchPalette({ open, setOpen }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex;
    return searchIndex.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [query]);

  const go = (to) => {
    navigate(to);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      go(results[active].to);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/60 dark:bg-black/70 backdrop-blur-sm pt-[12vh] px-4">
      <div
        className="absolute inset-0"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-xl rounded-xl bg-white dark:bg-ink-900 shadow-2xl ring-1 ring-ink-900/10 dark:ring-white/10 overflow-hidden transition-colors">
        <div className="flex items-center gap-3 border-b border-ink-900/10 dark:border-white/10 px-4 py-3.5">
          <Search size={18} className="text-ink-500 dark:text-slate-500 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search modules, screens, fields…"
            className="w-full bg-transparent text-[15px] text-ink-900 dark:text-slate-100 placeholder:text-ink-500/70 dark:placeholder:text-slate-500 focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-ink-500 dark:text-slate-500 hover:text-ink-800 dark:hover:text-slate-200 shrink-0 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto doc-scroll py-2">
          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-ink-500 dark:text-slate-500">
              No results for "{query}"
            </p>
          )}
          {results.map((item, i) => (
            <button
              key={item.to}
              onClick={() => go(item.to)}
              onMouseEnter={() => setActive(i)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                active === i
                  ? "bg-signal-50 dark:bg-signal-900/30"
                  : "hover:bg-ink-900/[0.025] dark:hover:bg-white/[0.03]"
              }`}
            >
              <FileText
                size={16}
                className={
                  active === i
                    ? "text-signal-600 dark:text-signal-400"
                    : "text-ink-500/60 dark:text-slate-600"
                }
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[13.5px] font-medium text-ink-900 dark:text-slate-100">
                  {item.label}
                </span>
                <span className="block text-[11.5px] text-ink-500 dark:text-slate-500">
                  {item.group}
                </span>
              </span>
              {active === i && (
                <CornerDownLeft size={14} className="text-signal-600 dark:text-signal-400 shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

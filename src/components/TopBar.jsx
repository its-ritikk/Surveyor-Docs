import { Link } from "react-router-dom";
import { Menu, Search, BookOpen, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ccLogo from "../assets/ccLogo.svg";

export default function TopBar({ onMenuClick, onSearchClick }) {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-ink-900/10 dark:border-white/10 bg-white/90 dark:bg-ink-950/90 backdrop-blur-md px-4 md:px-6 transition-colors duration-200">
      <button
        className="lg:hidden text-ink-700 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100 -ml-1 p-1.5 transition-colors"
        onClick={onMenuClick}
        aria-label="Toggle navigation"
      >
        <Menu size={22} />
      </button>

      {/* Brand */}
      <Link to="/" className="flex items-center gap-2.5 shrink-0">
        <img
          src={ccLogo}
          alt="CargoClave"
          className="h-8 w-8 object-contain"
        />
        <span className="hidden sm:flex flex-col leading-none">
          <span className="font-display font-bold text-[15px] text-ink-900 dark:text-slate-100 tracking-tight">
            CargoClave
          </span>
          <span className="text-[11px] text-ink-500 dark:text-slate-400 font-medium">
            Surveyor Management System
          </span>
        </span>
      </Link>

      <div className="flex-1" />

      {/* Search — desktop */}
      <button
        onClick={onSearchClick}
        className="hidden sm:flex items-center gap-2 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.025] dark:bg-white/5 px-3 py-2 text-[13px] text-ink-500 dark:text-slate-400 hover:border-signal-300 dark:hover:border-signal-600 hover:bg-signal-50/60 dark:hover:bg-signal-900/30 transition-colors w-64"
      >
        <Search size={15} />
        <span className="flex-1 text-left">Search docs…</span>
        <kbd className="rounded border border-ink-900/15 dark:border-white/15 bg-white dark:bg-white/10 px-1.5 py-0.5 text-[10.5px] font-sans font-semibold text-ink-500 dark:text-slate-400">
          ⌘K
        </kbd>
      </button>

      {/* Search — mobile icon */}
      <button
        onClick={onSearchClick}
        className="sm:hidden text-ink-700 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100 p-1.5 transition-colors"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {/* Version badge */}
      <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-signal-50 dark:bg-signal-900/40 border border-signal-200 dark:border-signal-700/60 px-2.5 py-1 text-[11px] font-semibold text-signal-700 dark:text-signal-400">
        <BookOpen size={12} /> v1.0 Docs
      </span>

      {/* Theme toggle */}
      <button
        onClick={toggle}
        className="p-2 rounded-lg text-ink-600 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100 hover:bg-ink-900/5 dark:hover:bg-white/10 transition-colors"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}

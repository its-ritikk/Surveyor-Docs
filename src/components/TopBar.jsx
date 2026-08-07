import { useState } from "react";
import { Search, Menu, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function LogoWithFallback() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white dark:text-[#000000] font-bold font-display text-sm tracking-wide shadow-sm group-hover:opacity-90 transition-opacity">
        CC
      </div>
    );
  }

  return (
    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-[#0A0A0A] border border-ink-900/10 dark:border-[#262626] p-1 shadow-sm group-hover:border-cyan-500/40 transition-all duration-200 overflow-hidden">
      <img
        src="/ccLogo.svg"
        alt="CargoClave Logo"
        className="h-full w-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default function TopBar({ onMenuClick, onSearchClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-ink-900/10 dark:border-[#262626] bg-white/80 dark:bg-[#000000]/90 backdrop-blur-md px-4 md:px-8 transition-colors">
      {/* Left: Branding */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Mobile menu trigger */}
        <button
          onClick={onMenuClick}
          className="p-2 text-ink-700 dark:text-[#A3A3A3] hover:text-ink-900 dark:hover:text-[#FFFFFF] lg:hidden rounded-md hover:bg-ink-900/[0.04] dark:hover:bg-[#171717] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <Link
          to="/"
          className="group flex items-center gap-2.5 transition-transform duration-150 active:scale-95"
        >
          <LogoWithFallback />
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              CargoClave
            </span>
            <span className="text-[10px] font-semibold text-ink-650 dark:text-[#A3A3A3] tracking-widest uppercase -mt-0.5">
              Surveyor Docs
            </span>
          </div>
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Search trigger (desktop) */}
        <button
          onClick={onSearchClick}
          className="hidden sm:flex items-center gap-2.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#0A0A0A] px-3.5 py-1.5 text-xs text-ink-650 dark:text-[#A3A3A3] hover:border-cyan-500/40 hover:bg-ink-900/[0.04] dark:hover:bg-[#171717] transition-all duration-150 shadow-sm"
        >
          <Search size={14} className="text-ink-650 dark:text-[#A3A3A3]" />
          <span>Search docs...</span>
          <kbd className="ml-2 rounded bg-ink-900/5 dark:bg-[#262626] px-1.5 py-0.5 text-[10px] font-mono text-ink-650 dark:text-[#A3A3A3] border border-ink-900/10 dark:border-[#262626]">
            Ctrl K
          </kbd>
        </button>

        {/* Mobile Search Button */}
        <button
          onClick={onSearchClick}
          className="p-2 text-ink-700 dark:text-[#A3A3A3] hover:text-ink-900 dark:hover:text-[#FFFFFF] sm:hidden rounded-md hover:bg-ink-900/[0.04] dark:hover:bg-[#171717] transition-colors"
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        {/* Version Badge */}
        <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-[11px] font-semibold text-cyan-700 dark:text-cyan-400 shrink-0">
          <BookOpen size={12} /> v1.0 Docs
        </span>
      </div>
    </header>
  );
}

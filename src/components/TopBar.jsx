import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Search, Sun, Moon, Menu, BookOpen } from "lucide-react";
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
  const { theme, toggle } = useTheme();

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

        {/* Logo / Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <LogoWithFallback />
          <div className="flex flex-col">
            <span className="font-display font-bold text-ink-900 dark:text-[#FFFFFF] text-base leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              CargoClave
            </span>
            <span className="text-[11px] font-medium text-ink-500 dark:text-[#A3A3A3] tracking-wider">
              Surveyor Management System
            </span>
          </div>
        </Link>
      </div>

      {/* Flexible Spacer */}
      <div className="flex-1 min-w-[1rem]" />

      {/* Right: Search Bar, Version Badge, Theme Toggle */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Search Bar - Width 420px-480px on desktop */}
        <div className="hidden sm:block w-[280px] md:w-[380px] lg:w-[440px] xl:w-[480px]">
          <button
            onClick={onSearchClick}
            className="flex w-full items-center justify-between rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#0A0A0A] px-3.5 py-2 text-xs text-ink-500 dark:text-[#A3A3A3] hover:bg-ink-900/[0.04] dark:hover:bg-[#171717] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-sm group focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          >
            <span className="flex items-center gap-2.5">
              <Search size={15} className="text-ink-500/70 dark:text-[#A3A3A3] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              <span className="group-hover:text-ink-700 dark:group-hover:text-[#E5E5E5] transition-colors">Search documentation...</span>
            </span>
            <kbd className="hidden sm:inline-block rounded border border-ink-900/10 dark:border-[#262626] bg-ink-900/5 dark:bg-[#171717] px-1.5 py-0.5 text-[10px] font-mono text-ink-500 dark:text-[#A3A3A3] group-hover:border-cyan-500/30 transition-colors">
              ⌘K
            </kbd>
          </button>
        </div>

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

        {/* Theme Toggle */}
        <button
          onClick={toggle}
          className={`relative inline-flex h-7 w-12 items-center rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 ${
            theme === "dark"
              ? "bg-[#0A0A0A] border border-[#262626] text-[#E5E5E5]"
              : "bg-ink-900/10 text-ink-700 hover:bg-ink-900/15"
          }`}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span
            className={`inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 ${
              theme === "dark" ? "translate-x-5" : "translate-x-0"
            }`}
          >
            {theme === "dark" ? (
              <Moon size={12} className="text-[#000000]" />
            ) : (
              <Sun size={12} className="text-ink-700" />
            )}
          </span>
        </button>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { nav } from "../data/nav";
import { useHeadings } from "../context/HeadingsContext";

function SidebarLink({ item, depth = 0, onNavigate }) {
  const location = useLocation();
  const { activeId } = useHeadings();

  const [pathname, hash] = (item.to || "").split("#");

  // Check if this node or any descendants match the active location
  const hasActiveDescendant = (node) => {
    if (!node) return false;
    const [nodePath] = (node.to || "").split("#");
    if (nodePath && location.pathname === nodePath) return true;
    if (node.children) {
      return node.children.some(hasActiveDescendant);
    }
    return false;
  };

  const isActive = hasActiveDescendant(item);
  const isDirectActive = hash
    ? location.pathname === pathname && activeId === hash
    : location.pathname === item.to;

  const hasChildren = Boolean(item.children && item.children.length > 0);

  // Auto-expand if active descendant exists, or manage toggle state
  const [userToggled, setUserToggled] = useState(null);

  useEffect(() => {
    if (isActive && userToggled === null) {
      setUserToggled(true);
    }
  }, [isActive, userToggled]);

  const isOpen = userToggled !== null ? userToggled : (isActive || !item.to);

  const toggleOpen = () => {
    if (hasChildren) {
      // If clicking toggle icon or collapsible header without navigation
      setUserToggled((prev) => (prev !== null ? !prev : !isOpen));
    }
  };

  const handleLinkClick = (e) => {
    if (hasChildren) {
      setUserToggled(true);
    }
    if (hash && location.pathname === pathname) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${hash}`);
      }
      if (onNavigate) onNavigate();
    } else {
      if (onNavigate) onNavigate();
    }
  };

  const indentClass =
    depth === 0
      ? ""
      : depth === 1
      ? "ml-4 pl-3 border-l border-ink-900/10 dark:border-[#262626]"
      : depth === 2
      ? "ml-8 pl-3.5 border-l-2 border-ink-900/20 dark:border-[#333333]"
      : "ml-12 pl-4 border-l-2 border-cyan-500/40 dark:border-cyan-500/30";

  return (
    <li className="flex flex-col">
      <div className={`group flex items-center justify-between rounded-md transition-all duration-150 ${indentClass}`}>
        {item.to ? (
          <Link
            to={item.to}
            onClick={handleLinkClick}
            className={`flex-1 flex items-center gap-2 rounded-md px-2.5 py-[6.5px] text-[13px] leading-5 transition-all duration-150 ${
              isDirectActive
                ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold"
                : isActive && hasChildren
                ? "text-ink-900 dark:text-[#FFFFFF] font-semibold hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-cyan-500/10"
                : "text-ink-600 dark:text-[#A3A3A3] hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-cyan-500/10 font-medium"
            }`}
          >
            {depth > 0 && !hasChildren && (
              <span
                className={`h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${
                  isDirectActive
                    ? "bg-cyan-500 dark:bg-cyan-400"
                    : "bg-ink-300 dark:bg-[#404040] group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400"
                }`}
              />
            )}
            <span className="truncate">{item.label}</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={toggleOpen}
            className="flex-1 flex items-center justify-between px-2.5 py-[6.5px] text-[12px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider text-left hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
          >
            <span className="truncate">{item.label}</span>
          </button>
        )}

        {hasChildren && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(e);
            }}
            aria-label={`Toggle ${item.label}`}
            className="p-1.5 text-ink-400 hover:text-cyan-700 dark:text-[#737373] dark:hover:text-cyan-400 transition-colors rounded hover:bg-cyan-500/10 shrink-0 mr-1"
          >
            <ChevronRight
              size={14}
              className={`transition-transform duration-200 ease-in-out ${
                isOpen ? "rotate-90 text-cyan-600 dark:text-cyan-400" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Smooth Height/Opacity Expand Transition */}
      {hasChildren && (
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mt-0.5 space-y-0.5 select-none">
              {item.children.map((child) => (
                <SidebarLink
                  key={child.to || child.label}
                  item={child}
                  depth={depth + 1}
                  onNavigate={onNavigate}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

export default function Sidebar({ onNavigate }) {
  return (
    <nav className="px-3 pb-10">
      {nav.map((group) => (
        <div key={group.heading} className="mb-6">
          <p className="px-2 mb-2 text-[11px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider">
            {group.heading}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <SidebarLink
                key={item.to || item.label}
                item={item}
                onNavigate={onNavigate}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

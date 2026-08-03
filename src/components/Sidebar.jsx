import { Link, useLocation } from "react-router-dom";
import { nav } from "../data/nav";
import { useHeadings } from "../context/HeadingsContext";

function SidebarLink({ item, depth = 0, onNavigate }) {
  const location = useLocation();
  const { activeId } = useHeadings();

  const [pathname, hash] = (item.to || "").split("#");

  // Check if this node or any descendants are active
  const hasActiveDescendant = (node) => {
    const [nodePath] = (node.to || "").split("#");
    if (location.pathname === nodePath) return true;
    if (node.children) {
      return node.children.some(hasActiveDescendant);
    }
    return false;
  };

  const isExpanded = item.to ? hasActiveDescendant(item) : false;

  const isLinkActive = hash
    ? (location.pathname === pathname && activeId === hash)
    : (location.pathname === item.to);

  const indentClass =
    depth === 0
      ? ""
      : depth === 1
      ? "ml-4"
      : depth === 2
      ? "ml-8"
      : "ml-12";

  const handleClick = (e) => {
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

  return (
    <li className="flex flex-col">
      {item.to ? (
        <Link
          to={item.to}
          onClick={handleClick}
          className={`flex items-center gap-2 rounded-md px-2.5 py-[7px] text-[13.5px] leading-5 transition-colors ${
            isLinkActive
              ? "bg-signal-50 dark:bg-signal-900/30 text-signal-700 dark:text-signal-400 font-semibold"
              : "text-ink-600 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100 hover:bg-ink-900/[0.035] dark:hover:bg-white/[0.05] font-medium"
          } ${indentClass}`}
        >
          {depth > 0 && (
            <span
              className={`h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${
                isLinkActive ? "bg-signal-500" : "bg-ink-300 dark:bg-slate-700"
              }`}
            />
          )}
          {item.label}
        </Link>
      ) : (
        <span
          className={`flex items-center gap-2 px-2.5 py-[7.5px] text-[11.5px] font-bold text-ink-500 dark:text-slate-500 uppercase tracking-wider ${indentClass}`}
        >
          {item.label}
        </span>
      )}

      {/* Render children if active/expanded */}
      {(isExpanded || !item.to) && item.children && (
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
      )}
    </li>
  );
}

export default function Sidebar({ onNavigate }) {
  return (
    <nav className="px-4 pb-10">
      {nav.map((group) => (
        <div key={group.heading} className="mb-6">
          <p className="px-2 mb-2 text-[11px] font-bold text-ink-500 dark:text-slate-500 uppercase tracking-wider">
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

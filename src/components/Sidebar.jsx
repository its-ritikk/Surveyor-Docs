import React, { useState, useEffect, useRef } from "react";
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
            data-sidebar-item="true"
            data-depth={depth}
            data-direct-active={isDirectActive ? "true" : "false"}
            className={`flex-1 flex items-center gap-2 rounded-md px-2.5 py-[6.5px] text-[13px] leading-5 transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:bg-cyan-500/20 focus-visible:text-cyan-700 dark:focus-visible:text-cyan-400 ${
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
            data-sidebar-item="true"
            data-depth={depth}
            className="flex-1 flex items-center justify-between px-2.5 py-[6.5px] text-[12px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider text-left hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:rounded-md"
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
            className="p-1.5 text-ink-400 hover:text-cyan-700 dark:text-[#737373] dark:hover:text-cyan-400 transition-colors rounded hover:bg-cyan-500/10 shrink-0 mr-1 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
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
  const location = useLocation();
  const navRef = useRef(null);

  // Auto-scroll active item into view on location change
  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector('[data-direct-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  // Gamepad / Joystick Poller
  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;

    const pollGamepad = () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      const gp = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3];

      if (gp) {
        const now = Date.now();
        if (now - lastTime > 160) {
          const dpadUp = gp.buttons[12]?.pressed;
          const dpadDown = gp.buttons[13]?.pressed;
          const dpadLeft = gp.buttons[14]?.pressed;
          const dpadRight = gp.buttons[15]?.pressed;
          const stickY = gp.axes[1];
          const stickX = gp.axes[0];

          let key = null;
          if (dpadDown || stickY > 0.4) key = "ArrowDown";
          else if (dpadUp || stickY < -0.4) key = "ArrowUp";
          else if (dpadRight || stickX > 0.4) key = "ArrowRight";
          else if (dpadLeft || stickX < -0.4) key = "ArrowLeft";

          if (key && document.activeElement) {
            lastTime = now;
            document.activeElement.dispatchEvent(
              new KeyboardEvent("keydown", { key, bubbles: true })
            );
          }
        }
      }
      animationFrameId = requestAnimationFrame(pollGamepad);
    };

    animationFrameId = requestAnimationFrame(pollGamepad);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Keyboard / Joystick Navigation Handler
  const handleKeyDown = (e) => {
    if (!navRef.current) return;
    const key = e.key;

    if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(key)) {
      const activeEl = document.activeElement;

      // All visible focusable sidebar items
      const allFocusables = Array.from(
        navRef.current.querySelectorAll('[data-sidebar-item="true"]')
      ).filter((el) => el.offsetWidth > 0 && el.offsetHeight > 0);

      if (allFocusables.length === 0) return;

      const activeIdx = allFocusables.indexOf(activeEl);
      const activeDepth = activeEl ? parseInt(activeEl.getAttribute("data-depth") || "0", 10) : 0;

      // Find direct parent item (closest item before activeIdx with depth === activeDepth - 1)
      let parentEl = null;
      if (activeDepth > 0 && activeIdx !== -1) {
        for (let i = activeIdx - 1; i >= 0; i--) {
          const depth = parseInt(allFocusables[i].getAttribute("data-depth") || "0", 10);
          if (depth === activeDepth - 1) {
            parentEl = allFocusables[i];
            break;
          }
        }
      }

      // Find siblings at current activeDepth under parentEl
      const startIdx = parentEl ? allFocusables.indexOf(parentEl) + 1 : 0;
      const parentDepth = parentEl ? parseInt(parentEl.getAttribute("data-depth") || "0", 10) : -1;

      const siblings = [];
      for (let i = startIdx; i < allFocusables.length; i++) {
        const itemDepth = parseInt(allFocusables[i].getAttribute("data-depth") || "0", 10);
        if (itemDepth <= parentDepth) break;
        if (itemDepth === activeDepth) {
          siblings.push(allFocusables[i]);
        }
      }

      // Find immediate sub-children of activeEl (items with depth === activeDepth + 1 following activeEl)
      const childrenOfActive = [];
      if (activeIdx !== -1) {
        for (let i = activeIdx + 1; i < allFocusables.length; i++) {
          const itemDepth = parseInt(allFocusables[i].getAttribute("data-depth") || "0", 10);
          if (itemDepth <= activeDepth) break;
          if (itemDepth === activeDepth + 1) {
            childrenOfActive.push(allFocusables[i]);
          }
        }
      }

      // ── UP / DOWN: NAVIGATE SIBLINGS AT CURRENT DEPTH LEVEL ONLY ─────
      if (key === "ArrowDown") {
        e.preventDefault();
        if (siblings.length === 0) return;
        const currIdx = siblings.indexOf(activeEl);
        const nextIdx = currIdx !== -1 && currIdx < siblings.length - 1 ? currIdx + 1 : 0;
        siblings[nextIdx].focus();
        siblings[nextIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else if (key === "ArrowUp") {
        e.preventDefault();
        if (siblings.length === 0) return;
        const currIdx = siblings.indexOf(activeEl);
        const prevIdx = currIdx > 0 ? currIdx - 1 : siblings.length - 1;
        siblings[prevIdx].focus();
        siblings[prevIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
      }

      // ── RIGHT BUTTON: ENTER SUB-CHILDREN OR MOVE TO NEXT SIBLING ─────
      else if (key === "ArrowRight") {
        e.preventDefault();
        const currSiblingIdx = siblings.indexOf(activeEl);

        // 1. If active item has sub-children / grandchildren, enter first sub-child!
        if (childrenOfActive.length > 0) {
          childrenOfActive[0].focus();
          childrenOfActive[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
        // 2. Otherwise move to next sibling at current level
        else if (currSiblingIdx !== -1 && currSiblingIdx < siblings.length - 1) {
          siblings[currSiblingIdx + 1].focus();
          siblings[currSiblingIdx + 1].scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
        // 3. At LAST sub-child / grandchild item -> Right Joystick is DISABLED!
        else {
          return;
        }
      }

      // ── LEFT BUTTON: STEP BACK UP TO IMMEDIATE PARENT ITEM ────────────
      else if (key === "ArrowLeft") {
        e.preventDefault();
        if (parentEl) {
          parentEl.focus();
          parentEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
          // Already at top-level parent -> Left button is disabled
          return;
        }
      }
    }
  };

  return (
    <nav
      ref={navRef}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className="px-3 pb-10 outline-none"
    >
      {nav.map((group) => (
        <div key={group.heading} className="mb-6">
          <p className="px-2 mb-2 text-[11px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider select-none">
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



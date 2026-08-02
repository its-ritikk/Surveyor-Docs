import { NavLink } from "react-router-dom";
import { nav } from "../data/nav";

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
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-2.5 py-[7px] text-[13.5px] leading-5 transition-colors ${
                      isActive
                        ? "bg-signal-50 dark:bg-signal-900/30 text-signal-700 dark:text-signal-400 font-semibold"
                        : "text-ink-600 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100 hover:bg-ink-900/[0.035] dark:hover:bg-white/[0.05] font-medium"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                          isActive ? "bg-signal-500" : "bg-transparent"
                        }`}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

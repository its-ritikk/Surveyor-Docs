import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import SearchPalette from "../components/SearchPalette";

export default function DocsLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950 transition-colors duration-200">
      <TopBar
        onMenuClick={() => setMobileOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />
      <SearchPalette open={searchOpen} setOpen={setSearchOpen} />

      <div className="flex w-full">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0 border-r border-ink-900/10 dark:border-white/10">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto doc-scroll pt-6">
            <Sidebar />
          </div>
        </aside>

        {/* Mobile sidebar drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-72 bg-white dark:bg-ink-900 shadow-xl overflow-y-auto doc-scroll transition-colors">
              <div className="flex h-16 items-center justify-between px-4 border-b border-ink-900/10 dark:border-white/10">
                <span className="font-display font-bold text-ink-900 dark:text-slate-100">
                  Menu
                </span>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 text-ink-700 dark:text-slate-400 hover:text-ink-900 dark:hover:text-slate-100">
                  <X size={20} />
                </button>
              </div>
              <div className="pt-4">
                <Sidebar onNavigate={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 px-6 py-10 md:px-10 md:py-12 lg:px-14 xl:px-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

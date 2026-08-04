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
    <div className="min-h-screen bg-white dark:bg-[#000000] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.06),rgba(0,0,0,1))] text-ink-900 dark:text-[#E5E5E5] transition-colors duration-200">
      <TopBar
        onMenuClick={() => setMobileOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />
      <SearchPalette open={searchOpen} setOpen={setSearchOpen} />

      <div className="flex w-full">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0 border-r border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#000000] transition-colors">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto doc-scroll pt-6">
            <Sidebar />
          </div>
        </aside>

        {/* Mobile sidebar drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-ink-950/50 dark:bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-72 bg-white dark:bg-[#000000] shadow-xl border-r border-ink-900/10 dark:border-[#262626] overflow-y-auto doc-scroll transition-colors">
              <div className="flex h-16 items-center justify-between px-4 border-b border-ink-900/10 dark:border-[#262626]">
                <span className="font-display font-bold text-ink-900 dark:text-[#FFFFFF]">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-ink-700 dark:text-[#A3A3A3] hover:text-ink-900 dark:hover:text-[#FFFFFF]"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="pt-4">
                <Sidebar onNavigate={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 px-6 py-10 md:px-10 md:py-12 lg:px-14 xl:px-16 bg-white dark:bg-[#000000] transition-colors">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

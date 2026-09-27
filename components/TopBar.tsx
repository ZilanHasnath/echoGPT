"use client";

import Image from "next/image";
import { Menu, LogIn } from "lucide-react";

interface TopBarProps {
  onOpenSidebar: () => void;
  isSidebarCollapsed: boolean;
}

export default function TopBar({ onOpenSidebar, isSidebarCollapsed }: TopBarProps) {
  return (
    <header className="relative flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 shrink-0 bg-transparent">
      <div className="flex items-center gap-3 z-10">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white text-slateink hover:text-indigo md:hidden shadow-xs"
        >
          <Menu size={18} />
        </button>

        <div className={`hidden md:flex items-center overflow-hidden transition-all duration-300 ${
          isSidebarCollapsed ? "max-w-[220px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-4 pointer-events-none"
        }`}>
          
          <div className="flex items-center gap-2.5 whitespace-nowrap">
            <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-ink via-indigo-900 to-indigo-600 bg-clip-text text-transparent">
              EchoGPT
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 sm:hidden">
        <span className="font-display text-lg font-bold tracking-tight bg-gradient-to-r from-ink via-indigo-900 to-indigo-600 bg-clip-text text-transparent">
          EchoGPT
        </span>
      </div>

      <div className="flex items-center gap-3 z-10">
        <div className={`hidden sm:flex items-center gap-2.5 transition-opacity duration-300 ${
          isSidebarCollapsed ? "md:opacity-0 md:pointer-events-none" : "md:opacity-100"
        }`}>
          
          <span className="font-display text-lg font-bold tracking-tight bg-gradient-to-r from-ink via-indigo-900 to-indigo-600 bg-clip-text text-transparent">
            EchoGPT
          </span>
        </div>

        <button
          type="button"
          aria-label="Login"
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-indigo px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-white shadow-pill transition-transform hover:scale-105"
        >
          <LogIn size={14} className="sm:w-4 sm:h-4" />
          <span>Login</span>
        </button>
      </div>
    </header>
  );
}
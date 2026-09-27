"use client";

import Image from "next/image";
import { 
  SquarePen, 
  MessageSquare, 
  Search,
  Home,
  Compass,
  History,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Sparkles
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
}

const engagementItems = [
  { id: "image-studio", label: "Image Studio", icon: ImageIcon, badge: "PRO" },
  { id: "video-studio", label: "Video Studio", icon: ImageIcon, badge: "PRO" },
  { id: "compare", label: "Compare", icon: MessageSquare },
  { id: "connectors", label: "Connectors", icon: MessageSquare },
  { id: "history", label: "History", icon: History },
  { id: "store", label: "Store", icon: MessageSquare },
  { id: "ai-tasks", label: "AI Tasks", icon: MessageSquare },
  { id: "ai-job-analysis", label: "AI Job Analysis", icon: MessageSquare },
  { id: "ai-sop-builder", label: "AI SOP Builder", icon: MessageSquare },
];

const supportItems = [
  { id: "support", label: "Support", icon: MessageSquare },
  { id: "newsletter", label: "Newsletter", icon: MessageSquare },
  { id: "subscriptions", label: "Subscriptions", icon: MessageSquare },
  { id: "api-platform", label: "API Platform", icon: MessageSquare },
  { id: "discord", label: "Discord", icon: MessageSquare },
];

const collapsedFiveItems = [
  { id: "search", label: "Search", icon: Search },
  { id: "home", label: "Home", icon: Home },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "history", label: "History", icon: History },
  { id: "image-studio", label: "Image Studio", icon: ImageIcon },
];

export default function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
  const [active, setActive] = useState("history");

  return (
    <>
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden"
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col rounded-r-[2.5rem] md:rounded-[2.5rem] border border-line bg-white p-4 md:p-6 shadow-card transition-all duration-300 md:static md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isCollapsed ? "md:w-24" : "md:w-72"} w-72`}>
        
        {!isCollapsed ? (
          <div className="flex items-center justify-between pb-3 bg-white shrink-0 border-b border-line/50">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Image src="/logo.svg" alt="EchoGPT Logo" width={30} height={30} className="h-[30px] w-auto shrink-0" />
              <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-ink via-indigo-900 to-indigo-600 bg-clip-text text-transparent truncate">
                EchoGPT
              </span>
            </div>
            
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-line text-slateink hover:text-indigo md:hidden"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={() => onToggleCollapse(true)}
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-xl border border-line text-slateink hover:text-indigo shrink-0"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center pb-3 shrink-0 border-b border-line/50">
            <button
              type="button"
              onClick={() => onToggleCollapse(false)}
              title="Expand sidebar"
              className="hidden md:flex h-11 w-11 items-center justify-center rounded-2xl border border-line text-slateink hover:text-indigo shrink-0 bg-mist/50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {isCollapsed ? (
          <div className="flex-1 my-3 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-3 w-full">
              <button
                type="button"
                title="New Chat"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo text-white shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <SquarePen size={18} />
              </button>

              <button
                type="button"
                title="Upgrade to Pro"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo/20 bg-indigo/5 text-indigo shadow-sm transition-all hover:bg-indigo/10 hover:scale-105 active:scale-95"
              >
                <Sparkles size={18} />
              </button>

              <div className="flex flex-col items-center gap-2 w-full pt-4 border-t border-line">
                {collapsedFiveItems.map(({ id, label, icon: Icon }) => {
                  const isActive = active === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      title={label}
                      onClick={() => setActive(id)}
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all ${
                        isActive
                          ? "border-indigo/20 bg-indigo-soft text-indigo shadow-xs"
                          : "border-line bg-white text-slateink hover:text-indigo hover:border-indigo/30"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onToggleCollapse(false)}
              title="See all options"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-mist text-indigo hover:bg-indigo-soft transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto my-3 pr-1 flex flex-col gap-6 [scrollbar-width:thin] [scrollbar-color:transparent_transparent] hover:[scrollbar-color:theme(colors.slateink/30)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-slateink/30 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="group relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-indigo py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo/90 active:scale-[0.98]"
              >
                <SquarePen size={18} strokeWidth={2} />
                <span>New Chat</span>
              </button>

              <button
                type="button"
                className="group relative flex w-full items-center justify-between rounded-2xl border border-indigo/20 bg-gradient-to-r from-indigo/[0.04] via-purple/[0.04] to-indigo/[0.04] px-4 py-3 text-sm font-medium text-indigo shadow-xs transition-all duration-200 hover:border-indigo/40 hover:bg-indigo/[0.08] active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles size={18} strokeWidth={2} className="text-indigo transition-transform duration-300 group-hover:rotate-12" />
                  <span>Upgrade to Pro</span>
                </div>
                <span className="rounded-md bg-indigo/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-indigo">
                  PRO
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <span className="px-3 py-2 text-[11px] font-semibold tracking-wider text-slateink/60 uppercase">
                Engagement
              </span>
              {engagementItems.map(({ id, label, icon: Icon, badge }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setActive(id);
                      onClose();
                    }}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-indigo-soft text-indigo font-semibold shadow-2xs"
                        : "text-slateink hover:bg-mist hover:text-indigo"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={2} />
                      <span className="truncate">{label}</span>
                    </div>
                    {badge && (
                      <span className="rounded-md bg-coral-soft px-1.5 py-0.5 text-[10px] font-bold text-coral shrink-0">
                        {badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-1 pt-2 border-t border-line">
              <span className="px-3 py-2 text-[11px] font-semibold tracking-wider text-slateink/60 uppercase">
                Help & Support
              </span>
              {supportItems.map(({ id, label, icon: Icon }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setActive(id);
                      onClose();
                    }}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-indigo-soft text-indigo font-semibold shadow-2xs"
                        : "text-slateink hover:bg-mist hover:text-indigo"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                    <span className="truncate">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
"use client";

import { LayoutGrid, X } from "lucide-react";
import { useState } from "react";

export default function ProBanner() {
  const [isRemoving, setIsRemoving] = useState(false);

  function handleClose() {
    setIsRemoving(true);
  }

  return (
    <div
      className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
        isRemoving ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
      }`}
    >
      <div className="min-h-0 px-4 sm:px-10">
        <div className="mx-auto max-w-2xl flex items-center justify-between rounded-xl border border-line bg-white/90 px-3 py-2 shadow-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-coral-soft text-coral">
              <LayoutGrid size={14} />
            </div>
            <span className="text-[11px] font-medium text-slateink truncate">
              <strong className="text-ink font-semibold">Unlock more</strong> with Pro
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              className="rounded-lg bg-indigo px-2.5 py-1 text-[11px] font-medium text-white shadow-xs transition-transform hover:scale-105"
            >
              Upgrade
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="flex h-6 w-6 items-center justify-center rounded-md text-slateink hover:bg-mist hover:text-ink transition-colors"
            >
              <X size={12} />
            </button>
          </div>
        </div>
        <div className="h-2" />
      </div>
    </div>
  );
}
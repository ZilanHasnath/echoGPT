"use client";

import { Sparkles, FileText, Target, PencilLine } from "lucide-react";

interface QuickTopicsProps {
  onPick: (label: string) => void;
}

const topics = [
  { label: "Creative Flow", icon: Sparkles },
  { label: "Resume Builder", icon: FileText },
  { label: "Set Challenges", icon: Target },
  { label: "Social Content", icon: PencilLine }
];

export default function QuickTopics({ onPick }: QuickTopicsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
      {topics.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          onClick={() => onPick(label)}
          className="flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3 py-1.5 text-[11px] font-medium text-slateink shadow-xs transition-all hover:border-indigo/40 hover:bg-mist hover:text-indigo"
        >
          <Icon size={12} className="text-indigo shrink-0" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
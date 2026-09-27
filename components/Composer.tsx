"use client";

import { ArrowUp, ImagePlus, Lightbulb, Mic, Paperclip, Telescope } from "lucide-react";
import { KeyboardEvent, useRef, useState } from "react";

const actions = [
  { id: "attach", label: "Attach file", icon: Paperclip },
  { id: "reason", label: "Reasoning", icon: Lightbulb },
  { id: "image", label: "Create image", icon: ImagePlus },
  { id: "research", label: "Deep research", icon: Telescope }
];

interface ComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  }

  return (
    <div className="rounded-4xl border border-line bg-white p-4 shadow-card">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        rows={2}
        placeholder="Ask anything, or send a command to Nimbus…"
        className="max-h-40 w-full resize-none bg-transparent px-3 py-2 text-sm text-ink placeholder:text-slateink/70 focus:outline-none"
      />
      <div className="flex items-center justify-between px-1 pt-2">
        <div className="flex flex-wrap items-center gap-2">
          {actions.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveAction(id)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeAction === id
                  ? "border-indigo/30 bg-indigo-soft text-indigo"
                  : "border-line text-slateink hover:border-indigo/30 hover:text-indigo"
              }`}
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Voice input"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slateink hover:text-indigo"
          >
            <Mic size={16} />
          </button>
          <button
            type="button"
            aria-label="Send message"
            onClick={onSend}
            disabled={!value.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo text-white shadow-pill transition-opacity disabled:opacity-40"
          >
            <ArrowUp size={16} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </div>
  );
}
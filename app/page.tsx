"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ChatHero from "@/components/ChatHero";
import ChatThread from "@/components/ChatThread";
import Composer from "@/components/Composer";
import ProBanner from "@/components/ProBanner";
import QuickTopics from "@/components/QuickTopics";
import { ChatMessage } from "@/lib/types";
import { craftReply, waitTime } from "@/lib/mockReply";

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  function sendMessage(text: string) {
    const content = text.trim();
    if (!content) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content
    };

    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setIsTyping(true);

    window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: craftReply(content)
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, waitTime());
  }

  const hasConversation = messages.length > 0;

  return (
    <div className="flex h-screen w-screen gap-2 overflow-hidden p-2 sm:p-3 box-border">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={setIsSidebarCollapsed}
      />

      <main className="relative flex flex-1 flex-col h-full min-h-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-line bg-gradient-to-b from-sky-soft via-white to-coral-soft/40 shadow-card">
        <TopBar
          onOpenSidebar={() => setIsSidebarOpen(true)}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        <div className={`flex-1 min-h-0 flex flex-col ${hasConversation ? "overflow-y-auto" : "justify-center overflow-hidden"}`}>
          {hasConversation ? (
            <ChatThread messages={messages} isTyping={isTyping} />
          ) : (
            <ChatHero name="there" />
          )}
        </div>

        <div className="mx-auto w-full max-w-2xl space-y-2 px-3 pb-3 sm:px-6 sm:pb-6 shrink-0 transition-all duration-300">
          {!hasConversation && <QuickTopics onPick={(label) => sendMessage(`Help me with ${label.toLowerCase()}`)} />}
          {!hasConversation && <ProBanner />}
          <Composer value={draft} onChange={setDraft} onSend={() => sendMessage(draft)} />
        </div>
      </main>
    </div>
  );
}
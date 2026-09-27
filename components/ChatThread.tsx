import { useEffect, useRef } from "react";
import { ChatMessage } from "@/lib/types";

interface ChatThreadProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

export default function ChatThread({ messages, isTyping }: ChatThreadProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="thin-scrollbar flex-1 overflow-y-auto px-4 py-6 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm animate-rise ${
                message.role === "user"
                  ? "rounded-br-md bg-indigo text-white"
                  : "rounded-bl-md border border-line bg-white text-ink"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-3xl rounded-bl-md border border-line bg-white px-4 py-3.5 shadow-sm">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slateink/50 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slateink/50 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slateink/50 [animation-delay:300ms]" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
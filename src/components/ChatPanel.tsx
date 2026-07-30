import { useRef, useEffect } from "react";

import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Message } from "@/hooks/useChat";

interface ChatPanelProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string, file?: File) => void;
}

export function ChatPanel({ messages, isLoading, onSend }: ChatPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[480px] border border-chat-border rounded-2xl bg-card shadow-card">
      <ScrollArea className="flex-1 overflow-hidden px-4 py-4" ref={scrollRef}>
        <div className="max-w-none space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} role={message.role} content={message.content} />
          ))}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <ChatMessage role="assistant" content="" isTyping />
          )}
        </div>
      </ScrollArea>
      <div className="border-t border-border px-4 py-3">
        <ChatInput onSend={onSend} disabled={isLoading} />
      </div>
    </div>
  );
}


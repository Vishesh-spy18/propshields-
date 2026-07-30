import { Link } from "react-router-dom";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ChatPanel } from "@/components/ChatPanel";

export default function Chat() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center overflow-hidden">
              <img src="/propshield-logo.png" alt="propShield logo" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h1 className="font-display text-lg font-semibold text-foreground">propShield</h1>
              <p className="text-xs text-muted-foreground">Your property assistant</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-3xl mx-auto px-4 py-6">
          <ChatPanel messages={messages} isLoading={isLoading} onSend={sendMessage} />
        </div>
      </main>
    </div>
  );
}

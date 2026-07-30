import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";
import { ChatPanel } from "@/components/ChatPanel";
import { useChat } from "@/hooks/useChat";

const checks = [
  {
    title: "Ownership & authority",
    description: "Who is the legal owner? Does the signer have the authority to rent/sell?",
    icon: ShieldCheck,
  },
  {
    title: "Financial clarity",
    description: "Deposit terms, deductions, maintenance, escalation, hidden charges.",
    icon: Scale,
  },
  {
    title: "Exit terms",
    description: "Notice period, lock-in, early termination, refund timelines.",
    icon: AlertTriangle,
  },
] as const;

export default function RiskAwareness() {
  const { messages, isLoading, sendMessage } = useChat(
    "Tell me about the property or agreement you're considering, and I'll list the practical checks and verifications you should do before you sign—without calling anything 'safe' or 'unsafe'."
  );

  return (
    <div className="bg-gradient-subtle">
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Scale className="w-5 h-5" />
            <p className="text-sm font-medium">Risk Awareness</p>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Know what to verify before you sign
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            No fear, no jargon—just the practical checks that reduce surprises later. I won’t label anything “safe” or
            “unsafe”; I’ll show you what to confirm.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg">
              Ask what to verify below <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Use this checklist with your own situation
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {checks.map((c) => (
              <Card key={c.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <c.icon className="w-4 h-4 text-primary" />
                    {c.title}
                  </CardTitle>
                  <CardDescription>{c.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Use this as a checklist. If you share your situation in chat, I’ll tailor it.
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-12 space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Ask for a personalized risk checklist
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Describe the property, city, and any deal details (rent, deposit, clauses). I’ll respond with checks you
              should do, in plain English—not legal conclusions.
            </p>
            <div className="mt-4">
              <ChatPanel messages={messages} isLoading={isLoading} onSend={sendMessage} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


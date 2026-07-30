import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ClipboardList, ArrowRight, Shield } from "lucide-react";
import { ChatPanel } from "@/components/ChatPanel";
import { useChat } from "@/hooks/useChat";

const questions = [
  "Is the termination/exit clause balanced for both sides?",
  "What documents should I ask for to verify ownership/authority?",
  "Are deposit deductions defined clearly? What is missing?",
  "What are the common dispute points in agreements like this?",
  "What changes would you recommend before I sign?",
] as const;

export default function LawyerPrep() {
  const { messages, isLoading, sendMessage } = useChat(
    "Tell me briefly about your property situation and share the key parts of your agreement. I’ll help you prepare a clear, structured list of questions to ask your property lawyer."
  );

  return (
    <div className="bg-gradient-subtle">
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Shield className="w-5 h-5" />
            <p className="text-sm font-medium">Lawyer Preparation</p>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Walk into your lawyer meeting prepared
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Get a clean summary of concerns and a question list to save time and focus on what matters. Not legal advice.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg">
              Prepare questions below <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Use this page while talking to your lawyer
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ClipboardList className="w-4 h-4 text-primary" />
                  Suggested questions
                </CardTitle>
                <CardDescription>Use these as a starting point.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  {questions.map((q) => (
                    <li key={q} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{q}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  What to bring
                </CardTitle>
                <CardDescription>So the advice is faster and clearer.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>- The agreement (draft/final) and any addendums</p>
                <p>- Email/WhatsApp promises that changed terms</p>
                <p>- Deposit/payment receipts or draft terms</p>
                <p>- IDs of parties (owner/broker/company) if available</p>
                <p>- Your top 3 priorities (budget/exit/safety/repairs)</p>
              </CardContent>
            </Card>
          </div>

          <section className="mt-12 space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Draft your lawyer questions here
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Share your situation and what worries you. I&apos;ll help you convert that into short, focused questions
              you can take into your lawyer meeting.
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


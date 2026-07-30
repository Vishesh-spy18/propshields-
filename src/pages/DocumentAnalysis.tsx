import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, ArrowRight, FileText } from "lucide-react";
import { ChatPanel } from "@/components/ChatPanel";
import { useChat } from "@/hooks/useChat";

export default function DocumentAnalysis() {
  const { messages, isLoading, sendMessage } = useChat(
    "Share your rental or sale agreement text (or key clauses), and I'll explain it in simple English, highlight missing or risky parts, and suggest questions to ask before you sign."
  );

  return (
    <div className="bg-gradient-subtle">
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary mb-3">
            <FileSearch className="w-5 h-5" />
            <p className="text-sm font-medium">Document Analysis</p>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Understand your agreement in plain English
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Get a clear breakdown of common clauses, missing protections, and questions you should ask before you sign.
            This is guidance for clarity—not legal advice.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg">
              Analyze a document below <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn common risks (see Risk Awareness page)
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="w-4 h-4 text-primary" />
                  Key clauses
                </CardTitle>
                <CardDescription>Notice period, deposit, maintenance, lock-in, utilities.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You’ll get a simple explanation of what each clause means and what it implies for you.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="w-4 h-4 text-primary" />
                  Missing protections
                </CardTitle>
                <CardDescription>Common missing clauses that protect tenants/buyers.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                I’ll highlight what’s missing and what you may want to request or clarify.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="w-4 h-4 text-primary" />
                  Questions to ask
                </CardTitle>
                <CardDescription>A focused checklist for your broker/owner/lawyer.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You’ll get a practical list of “ask this next” questions, based on what’s written.
              </CardContent>
            </Card>
          </div>

          <section className="mt-12 space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Try it now: paste your agreement text
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              You can paste the important parts of your agreement here. I’ll keep context from this page and focus on
              explanation and risk awareness—not legal verdicts.
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


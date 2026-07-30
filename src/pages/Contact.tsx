import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-subtle">
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Mail className="w-5 h-5" />
            <p className="text-sm font-medium">Contact</p>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Get in touch</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            For now, the fastest way is to use chat and tell us what you’re trying to do (rent/buy, city, timeline).
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/chat">
                Open chat <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">About</Link>
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Chat support
                </CardTitle>
                <CardDescription>Ask anything property-related.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Use the chat page to get guidance on documents, risks, and location trade-offs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Mail className="w-4 h-4 text-primary" />
                  Email (placeholder)
                </CardTitle>
                <CardDescription>Add your real support email later.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You can replace this card with a contact form or your support email address.
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}


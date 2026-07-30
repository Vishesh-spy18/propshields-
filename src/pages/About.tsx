import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, HeartHandshake, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-subtle">
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Shield className="w-5 h-5" />
            <p className="text-sm font-medium">About</p>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            A calmer way to make property decisions
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            propShield helps Indian renters and buyers understand documents, spot what to verify, and prepare better
            questions—without pressure, fear, or legal jargon.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/chat">
                Start chatting <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Eye className="w-4 h-4 text-primary" />
                  Transparency
                </CardTitle>
                <CardDescription>No fake certainty.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                I won’t claim access to databases or give “legal verdicts.” I’ll explain what’s written and what to check.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <HeartHandshake className="w-4 h-4 text-primary" />
                  Practical guidance
                </CardTitle>
                <CardDescription>Actionable next steps.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Clear questions, checklists, and trade-offs—so you can decide confidently.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Shield className="w-4 h-4 text-primary" />
                  Not legal advice
                </CardTitle>
                <CardDescription>Decision support only.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Always consult a qualified property lawyer for legal conclusions and final verification.
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}


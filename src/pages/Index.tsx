import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Shield,
  FileSearch,
  Scale,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Document Analysis",
    description:
      "Upload rental or sale agreements. I'll identify missing clauses, risky terms, and explain everything in simple language.",
    link: "/document-analysis",
  },
  {
    icon: Scale,
    title: "Risk Awareness",
    description:
      "Understand what needs verification — from ownership clarity to termination clauses. No legal jargon, just clarity.",
    link: "/risk-awareness",
  },
  {
    icon: MapPin,
    title: "Location Insights",
    description:
      "Get honest trade-off analysis for different areas — commute time, budget, lifestyle needs all considered.",
    link: "/location-compare",
  },
  {
    icon: MessageCircle,
    title: "Lawyer Preparation",
    description:
      "Prepare the right questions before consulting a property lawyer. Know what to ask and why it matters.",
    link: "/lawyer-prep",
  },
];

const benefits = [
  "Understand documents in plain English",
  "Know what to verify before signing",
  "Prepare confidently for lawyer meetings",
  "Make informed property decisions",
];

export default function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container relative mx-auto px-4 py-20 md:py-28 flex items-center justify-center min-h-[70vh]">
          <div className="max-w-4xl text-center">
            {/* Eyebrow (centered) */}
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#111827] px-4 py-2 mb-8 mx-auto">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-[12px] font-medium tracking-wide text-foreground">
                propShield
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display hero-heading text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              <span className="block">Make property decisions</span>
              <span className="block">
                with <span className="hero-highlight">confidence</span>
              </span>
            </h1>

            <p className="hero-body text-base md:text-lg max-w-2xl">
              Understand documents, identify risks, and prepare for lawyer conversations with a calm, trustworthy AI
              assistant built for Indian renters and buyers.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/chat">
                <Button variant="hero" size="lg" className="px-8">
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                Free to use | No signup required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Row Strip */}
      <section className="border-t border-border bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="feature-row-card flex items-center gap-3 px-4 py-3 text-xs md:text-sm text-slate-300"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="whitespace-nowrap">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How propShield helps you
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm not a lawyer or a broker — I'm a knowledgeable friend who helps you understand 
              what you're looking at and what questions to ask.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Built on trust and transparency
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I never claim a property is "safe" or "unsafe." I don't have access to government databases. 
              My role is to help you understand what you're reading, highlight things to verify, 
              and give you the confidence to ask the right questions.
            </p>
            <Link to="/chat">
              <Button variant="warm" size="lg">
                <MessageCircle className="w-5 h-5" />
                Start chatting with propShield
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">propShield</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Helping Indians make confident property decisions | Not legal advice
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

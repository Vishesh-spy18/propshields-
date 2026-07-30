import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Chat", to: "/chat" },
  { label: "Document Analysis", to: "/document-analysis" },
  { label: "Risk Awareness", to: "/risk-awareness" },
  { label: "Location Compare", to: "/location-compare" },
  { label: "Lawyer Prep", to: "/lawyer-prep" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="navbar sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(94,234,212,0.15)] group-hover:shadow-[0_0_18px_rgba(94,234,212,0.3)] transition-shadow duration-300">
            <img
              src="/propshield-logo.png"
              alt="propShield logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-semibold text-foreground tracking-tight">propShield</p>
            <p className="text-[11px] text-muted-foreground -mt-0.5">Property assistant</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "nav-link px-3 py-1.5 text-xs font-medium transition-colors border-b-2 border-transparent"
              )}
              activeClassName="nav-link-active"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/chat">Start Chat</Link>
          </Button>

          {/* Mobile nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/propshield-logo.png" alt="propShield logo" className="w-5 h-5 object-contain" />
                  propShield
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "w-full rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
                    )}
                    activeClassName="text-foreground bg-secondary/60"
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="pt-2">
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/chat">Start Chat</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import LocationCompare from "./pages/LocationCompare";
import NotFound from "./pages/NotFound";
import { SiteHeader } from "@/components/SiteHeader";
import DocumentAnalysis from "./pages/DocumentAnalysis";
import RiskAwareness from "./pages/RiskAwareness";
import LawyerPrep from "./pages/LawyerPrep";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Background } from "@/components/Background";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Background>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/document-analysis" element={<DocumentAnalysis />} />
                <Route path="/risk-awareness" element={<RiskAwareness />} />
                <Route path="/location-compare" element={<LocationCompare />} />
                <Route path="/lawyer-prep" element={<LawyerPrep />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Background>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

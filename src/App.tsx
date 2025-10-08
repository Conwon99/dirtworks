import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import Glasgow from "./pages/Glasgow";
import Ayrshire from "./pages/Ayrshire";
import GardenMaintenance from "./pages/GardenMaintenance";
import LandscapingGroundworks from "./pages/LandscapingGroundworks";
import PatiosFencingDecking from "./pages/PatiosFencingDecking";
import PressureWashing from "./pages/PressureWashing";
import BuildingServices from "./pages/BuildingServices";
import NotFound from "./pages/NotFound";
import { trackPageView } from "./utils/analytics";

const queryClient = new QueryClient();

// Component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);
  }, [location]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/glasgow" element={<Glasgow />} />
            <Route path="/ayrshire" element={<Ayrshire />} />
            <Route path="/garden-maintenance" element={<GardenMaintenance />} />
            <Route path="/landscaping-groundworks" element={<LandscapingGroundworks />} />
            <Route path="/patios-fencing-decking" element={<PatiosFencingDecking />} />
            <Route path="/pressure-washing" element={<PressureWashing />} />
            <Route path="/building-services" element={<BuildingServices />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

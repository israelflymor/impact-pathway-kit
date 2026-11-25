import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Programs from "./pages/Programs";
import SecureTheInternet from "./pages/SecureTheInternet";
import SmbBoost from "./pages/SmbBoost";
import Impact from "./pages/Impact";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const restoreGitHubPagesRoute = () => {
  const params = new URLSearchParams(window.location.search);
  const route = params.get("path");
  if (!route) return;

  window.history.replaceState(
    {},
    "",
    `/impact-pathway-kit${route}${window.location.hash}`,
  );
};

restoreGitHubPagesRoute();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/secure-the-internet" element={<SecureTheInternet />} />
            <Route path="/programs/smb-boost" element={<SmbBoost />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreas from "@/components/ServiceAreas";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollDepthTracker />
      <Navigation />
      <Hero />
      <TrustBar />
      <AboutUs />
      <ServicesGrid />
      <Gallery />
      <ServiceAreas />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

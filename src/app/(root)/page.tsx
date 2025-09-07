import { Footer } from "@/components/LandingPage/Footer";
import { Header } from "@/components/LandingPage/Header";
import { Hero } from "@/components/LandingPage/Hero";
import { Testimonials } from "@/components/LandingPage/Testimonials";
import { Offerings } from "@/components/LandingPage/Offerings";
import { DecorativeBackground } from "@/components/LandingPage/ui/Background";
import { ScrollArea } from "@/components/LandingPage/ui/ScrollArea";

export default async function Home() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      {/* Static background shapes, textures and animations */}
      <DecorativeBackground />

      {/* Header (static at top while content below scrolls) */}
      <Header />

      {/* Scrollable content area with no visible scrollbar */}
      <ScrollArea>
        {/* Hero */}
        <Hero />

        {/* Products & Services overview */}
        <Offerings />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer (inside scroll area) */}
        <Footer />
      </ScrollArea>
    </div>
  );
}

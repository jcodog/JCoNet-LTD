import { Footer } from "@/components/LandingPage/Footer";
import { Header } from "@/components/LandingPage/Header";
import { Hero } from "@/components/LandingPage/Hero";
import { Products } from "@/components/LandingPage/Products";
import { Services } from "@/components/LandingPage/Services";
import { Testimonials } from "@/components/LandingPage/Testimonials";
import { DecorativeBackground } from "@/components/LandingPage/ui/Background";
import { ScrollArea } from "@/components/LandingPage/ui/ScrollArea";

export default async function Home() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <DecorativeBackground />

      {/* Header (static at top while content below scrolls) */}
      <Header />

      {/* Scrollable content area with no visible scrollbar */}
      <ScrollArea>
        {/* Hero */}
        <Hero />

        {/* Products */}
        <Products />

        {/* Services */}
        <Services />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer (inside scroll area) */}
        <Footer />
      </ScrollArea>
    </div>
  );
}

import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WholesaleSection from "@/components/sections/WholesaleSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";
import LifestyleGallery from "@/components/sections/LifestyleGallery";

import OrderSection from "@/components/sections/OrderSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductShowcase />
        <FeaturesSection />
        <LifestyleGallery />

        <WholesaleSection />
        <OrderSection />
        <TestimonialsSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}



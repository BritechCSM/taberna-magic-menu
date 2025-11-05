import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <About />
      
      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <FeaturedDishes />
      
      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <MenuSection />
      
      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <GallerySection />
      
      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

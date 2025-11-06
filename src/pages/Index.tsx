import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative background blocks - White on dark */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left white block */}
        <div className="absolute -top-60 -left-60 w-[1400px] h-[1200px] bg-white/5 blur-[80px]"></div>
        
        {/* Top right white block */}
        <div className="absolute -top-40 right-0 w-[1200px] h-[1000px] bg-white/8 blur-[90px]"></div>
        
        {/* Middle left white accent */}
        <div className="absolute top-[30%] -left-80 w-[1100px] h-[1000px] bg-white/6 blur-[80px]"></div>
        
        {/* Middle right white section */}
        <div className="absolute top-[40%] -right-80 w-[1300px] h-[1100px] bg-white/7 blur-[90px]"></div>
        
        {/* Bottom white coverage */}
        <div className="absolute -bottom-60 -left-80 w-[1500px] h-[1200px] bg-white/8 blur-[80px]"></div>
        
        {/* Bottom right white block */}
        <div className="absolute -bottom-40 -right-60 w-[1200px] h-[1000px] bg-white/6 blur-[90px]"></div>
      </div>
      
      <div className="relative z-10">
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
      
      <GallerySection />
      
      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <Footer />
      <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;

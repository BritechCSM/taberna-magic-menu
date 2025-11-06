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
      {/* Decorative background blocks - Vibrant yellow background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Massive top yellow coverage */}
        <div className="absolute -top-60 -left-60 w-[1400px] h-[1200px] opacity-50 blur-[80px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Top right yellow block */}
        <div className="absolute -top-40 right-0 w-[1200px] h-[1000px] opacity-55 blur-[90px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Middle left yellow with orange tint */}
        <div className="absolute top-[30%] -left-80 w-[1100px] h-[1000px] opacity-45 blur-[80px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Middle right massive yellow section */}
        <div className="absolute top-[40%] -right-80 w-[1300px] h-[1100px] opacity-50 blur-[90px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Bottom massive yellow coverage */}
        <div className="absolute -bottom-60 -left-80 w-[1500px] h-[1200px] opacity-55 blur-[80px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Bottom right yellow block */}
        <div className="absolute -bottom-40 -right-60 w-[1200px] h-[1000px] opacity-50 blur-[90px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Orange accent overlays for warmth */}
        <div className="absolute top-[50%] left-[20%] w-[800px] h-[800px] opacity-20 blur-[100px]" 
             style={{ backgroundColor: 'hsl(30 100% 55%)' }}></div>
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

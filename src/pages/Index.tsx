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
      {/* Decorative background blocks */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left large yellow block */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] opacity-30 blur-[100px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Top right yellow block */}
        <div className="absolute top-0 right-0 w-[900px] h-[700px] opacity-35 blur-[120px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Middle left orange accent */}
        <div className="absolute top-[35%] -left-60 w-[700px] h-[700px] opacity-25 blur-[100px]" 
             style={{ backgroundColor: 'hsl(30 100% 55%)' }}></div>
        
        {/* Middle right section yellow */}
        <div className="absolute top-[45%] -right-60 w-[850px] h-[800px] opacity-35 blur-[120px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Bottom left large yellow block */}
        <div className="absolute bottom-0 -left-60 w-[1000px] h-[900px] opacity-30 blur-[100px]" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Bottom right orange accent */}
        <div className="absolute -bottom-40 right-0 w-[800px] h-[800px] opacity-25 blur-[100px]" 
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

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
        {/* Top left yellow block */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Top right yellow block */}
        <div className="absolute top-40 -right-40 w-[600px] h-96 opacity-15 blur-2xl" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Middle left orange accent */}
        <div className="absolute top-[40%] -left-32 w-72 h-72 rounded-full opacity-10 blur-3xl" 
             style={{ backgroundColor: 'hsl(30 100% 55%)' }}></div>
        
        {/* Middle section yellow */}
        <div className="absolute top-[50%] right-0 w-[500px] h-[400px] opacity-20 blur-3xl" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Bottom left large yellow block */}
        <div className="absolute bottom-20 -left-40 w-[700px] h-[500px] opacity-15 blur-2xl" 
             style={{ backgroundColor: 'hsl(45 100% 51%)' }}></div>
        
        {/* Bottom right accent */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl" 
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

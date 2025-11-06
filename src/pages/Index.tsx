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
      {/* Decorative floating elements - Yumix style */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Small orange circles - top area */}
        <div className="absolute top-20 right-[15%] w-8 h-8 rounded-full bg-[#ff8c42] opacity-80"></div>
        <div className="absolute top-32 right-[25%] w-6 h-6 rounded-full bg-[#ff6b35] opacity-70"></div>
        <div className="absolute top-[15%] right-[8%] w-10 h-10 rounded-full bg-[#ffa500] opacity-60"></div>
        
        {/* Small orange circles - middle right */}
        <div className="absolute top-[45%] right-[12%] w-7 h-7 rounded-full bg-[#ff8c42] opacity-75"></div>
        <div className="absolute top-[50%] right-[20%] w-5 h-5 rounded-full bg-[#ff6b35] opacity-65"></div>
        
        {/* Small orange circles - bottom right */}
        <div className="absolute bottom-[25%] right-[18%] w-9 h-9 rounded-full bg-[#ffa500] opacity-70"></div>
        <div className="absolute bottom-[15%] right-[10%] w-6 h-6 rounded-full bg-[#ff8c42] opacity-60"></div>
        
        {/* Small orange circles - left side scattered */}
        <div className="absolute top-[30%] left-[8%] w-7 h-7 rounded-full bg-[#ff6b35] opacity-65"></div>
        <div className="absolute top-[60%] left-[15%] w-8 h-8 rounded-full bg-[#ffa500] opacity-70"></div>
        <div className="absolute bottom-[35%] left-[5%] w-6 h-6 rounded-full bg-[#ff8c42] opacity-60"></div>
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

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedDishes />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

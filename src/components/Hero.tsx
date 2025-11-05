import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Buenas Comidas,<br />
          <span className="text-primary">Buenas Vibras</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Donde la tradición y el sabor se encuentran en cada plato
        </p>
        <Link to="/menu">
          <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8 py-6">
            Ver Menú
          </Button>
        </Link>
      </div>
    </section>
  );
};

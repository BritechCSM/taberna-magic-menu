import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("destacados");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 hero-gradient">
        <img
          src={heroImage}
          alt="Deliciosa comida"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Buenas Comidas,
          <br />
          Buenas Vibras
        </h1>
        <Button
          onClick={scrollToMenu}
          className="mt-8 bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Ver menú destacados"
        >
          Ver menú
        </Button>
      </div>
    </section>
  );
};

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import patapasBravasImg from "@/assets/patatas-bravas.jpg";
import jamonQuesoImg from "@/assets/jamon-queso.jpg";
import arrozImg from "@/assets/arroz.jpg";
import entranaImg from "@/assets/entrana.jpg";
import calamarImg from "@/assets/calamar.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import heroImage from "@/assets/hero-food.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Gambas a la parrilla" },
    { src: restaurantInterior, alt: "Interior del restaurante" },
    { src: patapasBravasImg, alt: "Patatas Bravas" },
    { src: jamonQuesoImg, alt: "Jamón Ibérico con Queso" },
    { src: arrozImg, alt: "Arroz del Señoret" },
    { src: entranaImg, alt: "Entraña Argentina" },
    { src: calamarImg, alt: "Calamar Nacional" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
            <p className="text-lg text-muted-foreground">
              Una muestra de nuestros platos y ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

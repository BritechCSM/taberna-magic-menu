import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import plato1 from "@/assets/plato-1.png";
import plato2 from "@/assets/plato-2.png";
import plato3 from "@/assets/plato-3.png";
import plato4 from "@/assets/plato-4.png";
import plato5 from "@/assets/plato-5.png";
import plato6 from "@/assets/plato-6.png";
import plato7 from "@/assets/plato-7.png";
import plato8 from "@/assets/plato-8.png";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import heroImage from "@/assets/hero-food.jpg";

const Gallery = () => {
  const images = [
    { src: plato7, alt: "Tapas Variadas - Jamón, Queso, Croquetas y más" },
    { src: plato8, alt: "Empanadillas Caseras Crujientes" },
    { src: plato2, alt: "Tabla de Jamón Ibérico con Queso y Nueces" },
    { src: plato4, alt: "Entrecot con Verduras Asadas" },
    { src: plato6, alt: "Croquetas Caseras con Alioli" },
    { src: plato1, alt: "Arroz del Señoret" },
    { src: plato3, alt: "Calamar Nacional" },
    { src: plato5, alt: "Calamares Mixtos" },
    { src: heroImage, alt: "Gambas a la Parrilla" },
    { src: restaurantInterior, alt: "Interior del Restaurante" },
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

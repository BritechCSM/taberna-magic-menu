import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import patapasBravasImg from "@/assets/patatas-bravas.jpg";
import jamonQuesoImg from "@/assets/jamon-queso.jpg";
import arrozImg from "@/assets/arroz.jpg";
import entranaImg from "@/assets/entrana.jpg";
import calamarImg from "@/assets/calamar.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import heroImage from "@/assets/hero-food.jpg";
import tapasVariadasImg from "@/assets/tapas-variadas.jpg";
import empanadillasImg from "@/assets/empanadillas.jpg";
import jamonQuesoNuecesImg from "@/assets/jamon-queso-nueces.jpg";
import entrecotVerdurasImg from "@/assets/entrecot-verduras.jpg";
import croquetasImg from "@/assets/croquetas.jpg";
import huevosJamonImg from "@/assets/huevos-jamon.jpg";
import tablaJamonQuesoImg from "@/assets/tabla-jamon-queso.jpg";
import chuletonPatatasImg from "@/assets/chuleton-patatas.jpg";

const Gallery = () => {
  const images = [
    { src: tapasVariadasImg, alt: "Tapas Variadas - Jamón, Queso, Croquetas y más" },
    { src: empanadillasImg, alt: "Empanadillas Caseras Crujientes" },
    { src: jamonQuesoNuecesImg, alt: "Tabla de Jamón Ibérico con Queso y Nueces" },
    { src: entrecotVerdurasImg, alt: "Entrecot con Verduras Asadas" },
    { src: croquetasImg, alt: "Croquetas Caseras con Alioli" },
    { src: huevosJamonImg, alt: "Huevos Rotos con Jamón Ibérico" },
    { src: tablaJamonQuesoImg, alt: "Tabla de Jamón Ibérico con Queso" },
    { src: chuletonPatatasImg, alt: "Chuletón a la Parrilla con Patatas" },
    { src: heroImage, alt: "Gambas a la Parrilla" },
    { src: restaurantInterior, alt: "Interior del Restaurante" },
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

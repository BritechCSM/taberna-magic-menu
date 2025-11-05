import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import patapasBravasImg from "@/assets/patatas-bravas.jpg";
import jamonQuesoImg from "@/assets/jamon-queso.jpg";
import arrozImg from "@/assets/arroz.jpg";
import entranaImg from "@/assets/entrana.jpg";
import calamarImg from "@/assets/calamar.jpg";
import darkTexture from "@/assets/dark-texture.jpg";
import tapasVariadasImg from "@/assets/tapas-variadas.jpg";
import empanadillasImg from "@/assets/empanadillas.jpg";
import jamonQuesoNuecesImg from "@/assets/jamon-queso-nueces.jpg";
import entrecotVerdurasImg from "@/assets/entrecot-verduras.jpg";
import croquetasImg from "@/assets/croquetas.jpg";
import huevosJamonImg from "@/assets/huevos-jamon.jpg";
import tablaJamonQuesoImg from "@/assets/tabla-jamon-queso.jpg";
import chuletonPatatasImg from "@/assets/chuleton-patatas.jpg";

const imageMap: Record<string, string> = {
  "Arroz": arrozImg,
  "Jamón ibérico con queso": jamonQuesoImg,
  "Calamar Nacional": calamarImg,
  "Entraña Argentina": entranaImg,
  "Calamares mixtos": calamarImg,
  "Croquetas caseras": croquetasImg,
  "Tapas Variadas": tapasVariadasImg,
  "Empanadillas": empanadillasImg,
  "Jamón Ibérico con Queso y Nueces": jamonQuesoNuecesImg,
  "Entrecot con Verduras": entrecotVerdurasImg,
  "Huevos Rotos con Jamón": huevosJamonImg,
  "Tabla de Jamón y Queso": tablaJamonQuesoImg,
  "Chuletón a la Parrilla": chuletonPatatasImg,
};

export const FeaturedDishes = () => {
  const { data: dishes } = useQuery({
    queryKey: ["featured-dishes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("is_featured", true)
        .order("display_order");
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <section 
      id="destacados" 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${darkTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Platos Destacados</h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Descubre nuestros platos destacados: auténticos, deliciosos y preparados con amor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {dishes?.map((dish) => (
            <div key={dish.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src={imageMap[dish.name] || dish.image_url || ""}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-normal text-gray-900">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import darkTexture from "@/assets/dark-texture.jpg";
import plato1 from "@/assets/plato-1.png";
import plato2 from "@/assets/plato-2.png";
import plato3 from "@/assets/plato-3.png";
import plato4 from "@/assets/plato-4.png";
import plato5 from "@/assets/plato-5.png";
import plato6 from "@/assets/plato-6.png";
import plato7 from "@/assets/plato-7.png";
import plato8 from "@/assets/plato-8.png";

const imageMap: Record<string, string> = {
  "Arroz": plato1,
  "Jamón ibérico con queso": plato2,
  "Calamar Nacional": plato3,
  "Entraña Argentina": plato4,
  "Calamares mixtos": plato5,
  "Croquetas caseras": plato6,
  "Tapas Variadas": plato7,
  "Empanadillas": plato8,
  "Jamón Ibérico con Queso y Nueces": plato2,
  "Entrecot con Verduras": plato4,
  "Huevos Rotos con Jamón": plato6,
  "Tabla de Jamón y Queso": plato2,
  "Chuletón a la Parrilla": plato4,
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

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import patapasBravasImg from "@/assets/patatas-bravas.jpg";
import jamonQuesoImg from "@/assets/jamon-queso.jpg";
import arrozImg from "@/assets/arroz.jpg";
import entranaImg from "@/assets/entrana.jpg";
import calamarImg from "@/assets/calamar.jpg";
import darkTexture from "@/assets/dark-texture.jpg";

const imageMap: Record<string, string> = {
  "Patatas Bravas": patapasBravasImg,
  "Jamón Ibérico con Queso Curado": jamonQuesoImg,
  "Arroz del Señoret": arrozImg,
  "Entraña Argentina": entranaImg,
  "Calamar Nacional": calamarImg,
};

const allergenLabels: Record<string, string> = {
  gluten: "Gluten",
  crustaceans: "Crustáceos",
  eggs: "Huevos",
  fish: "Pescado",
  peanuts: "Cacahuetes",
  soy: "Soja",
  dairy: "Lácteos",
  nuts: "Frutos secos",
  celery: "Apio",
  mustard: "Mostaza",
  sesame: "Sésamo",
  sulfites: "Sulfitos",
  lupin: "Altramuces",
  molluscs: "Moluscos",
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
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Platos Destacados</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Descubre nuestros platos destacados: auténticos, deliciosos y preparados con amor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes?.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={imageMap[dish.name] || dish.image_url || ""}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

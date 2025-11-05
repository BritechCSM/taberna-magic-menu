import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import darkTexture from "@/assets/dark-texture.jpg";
import jamonIberico from "@/assets/jamon-iberico-queso.png";
import entranaArgentina from "@/assets/entrana-argentina.png";
import patatasBravas from "@/assets/patatas-bravas.jpeg";
import arroces from "@/assets/arroces.jpeg";
import calamar from "@/assets/calamar.jpeg";
import quesoFrito from "@/assets/queso-frito-nuevo.jpg";
import croquetasCaseras from "@/assets/croquetas-caseras.jpg";
import plato7 from "@/assets/plato-7.png";
import plato8 from "@/assets/plato-8.png";

const imageMap: Record<string, string> = {
  "Arroz": arroces,
  "Arroces": arroces,
  "Patatas bravas": patatasBravas,
  "Jamón ibérico con queso": jamonIberico,
  "Jamón ibérico con queso curado": jamonIberico,
  "Calamar nacional": calamar,
  "Calamar Nacional": calamar,
  "Entraña argentina": entranaArgentina,
  "Entraña Argentina": entranaArgentina,
  "Queso frito con mermelada de tomate": quesoFrito,
  "Queso frito": quesoFrito,
  "Calamares mixtos": calamar,
  "Croquetas caseras": croquetasCaseras,
  "Tapas Variadas": plato7,
  "Empanadillas": plato8,
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

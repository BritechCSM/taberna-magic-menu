import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import patapasBravasImg from "@/assets/patatas-bravas.jpg";
import jamonQuesoImg from "@/assets/jamon-queso.jpg";
import arrozImg from "@/assets/arroz.jpg";
import entranaImg from "@/assets/entrana.jpg";
import calamarImg from "@/assets/calamar.jpg";

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
    <section id="destacados" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Platos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros platos destacados: auténticos, deliciosos y preparados con amor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes?.map((dish) => (
            <Card key={dish.id} className="overflow-hidden bg-card border-border hover:border-primary transition-colors">
              <div className="h-48 overflow-hidden">
                <img
                  src={imageMap[dish.name] || dish.image_url || ""}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{dish.name}</CardTitle>
                <CardDescription>{dish.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-foreground">{dish.price}€</span>
                  <div className="flex flex-wrap gap-1">
                    {dish.allergens?.map((allergen: string) => (
                      <Badge key={allergen} variant="secondary" className="text-xs">
                        {allergenLabels[allergen]}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

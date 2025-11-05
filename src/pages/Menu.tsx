import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const Menu = () => {
  const { data: categories } = useQuery({
    queryKey: ["menu-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_categories")
        .select("*")
        .order("display_order");
      
      if (error) throw error;
      return data;
    },
  });

  const { data: items } = useQuery({
    queryKey: ["menu-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .order("display_order");
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Menú</h1>
            <p className="text-lg text-muted-foreground">
              Descubre nuestra selección de platos tradicionales y auténticos
            </p>
          </div>

          <Tabs defaultValue={categories?.[0]?.id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              {categories?.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories?.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items
                    ?.filter((item) => item.category_id === category.id)
                    .map((item) => (
                      <Card key={item.id} className="bg-gradient-card border-border">
                        {item.image_url && (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={item.image_url}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          {item.description && (
                            <CardDescription>{item.description}</CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-start">
                            <span className="text-2xl font-bold text-primary">
                              {item.price}€
                            </span>
                            {item.allergens && item.allergens.length > 0 && (
                              <div className="flex flex-wrap gap-1 justify-end flex-1 ml-4">
                                {item.allergens.map((allergen: string) => (
                                  <Badge
                                    key={allergen}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {allergenLabels[allergen]}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;

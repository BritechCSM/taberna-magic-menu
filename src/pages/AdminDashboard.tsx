import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemsManager } from "@/components/admin/MenuItemsManager";
import { CategoriesManager } from "@/components/admin/CategoriesManager";
import logo from "@/assets/logo.png";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/admin");
      return;
    }

    // Check if user is admin
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .single();

    if (roleData?.role !== "admin") {
      toast({
        title: "Acceso Denegado",
        description: "No tienes permisos de administrador.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Sesión Cerrada",
      description: "Has cerrado sesión correctamente.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white/70">Cargando...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="La Taberna de Lara" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold text-white">
              Panel de <span className="text-primary">Administración</span>
            </h1>
          </div>
          <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="items" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 border border-white/10">
            <TabsTrigger 
              value="items"
              className="data-[state=active]:bg-primary data-[state=active]:text-white text-white/70"
            >
              Platos del Menú
            </TabsTrigger>
            <TabsTrigger 
              value="categories"
              className="data-[state=active]:bg-primary data-[state=active]:text-white text-white/70"
            >
              Categorías
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            <MenuItemsManager />
          </TabsContent>

          <TabsContent value="categories">
            <CategoriesManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

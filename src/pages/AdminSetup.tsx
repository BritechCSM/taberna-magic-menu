import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AdminSetup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  const makeAdmin = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "Debes iniciar sesión primero",
        variant: "destructive",
      });
      navigate("/admin");
      return;
    }

    try {
      const { error } = await supabase
        .from('user_roles')
        .insert([
          { user_id: user.id, role: 'admin' }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Ya eres admin",
            description: "Tu cuenta ya tiene permisos de administrador",
          });
          navigate("/admin/dashboard");
        } else {
          throw error;
        }
      } else {
        toast({
          title: "¡Acceso admin otorgado!",
          description: "Ahora tienes permisos de administrador",
        });
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "No se pudo otorgar acceso admin",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card p-8 rounded-lg border border-border">
        <h1 className="text-2xl font-bold text-white mb-4">Configuración de Admin</h1>
        {user ? (
          <div className="space-y-4">
            <p className="text-white">Usuario: {user.email}</p>
            <Button onClick={makeAdmin} className="w-full">
              Otorgar acceso Admin
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-white">Debes iniciar sesión primero</p>
            <Button onClick={() => navigate("/admin")} className="w-full">
              Ir a Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSetup;

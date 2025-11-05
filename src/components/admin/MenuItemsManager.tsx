import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const allergenOptions = [
  { value: "gluten", label: "Gluten" },
  { value: "crustaceans", label: "Crustáceos" },
  { value: "eggs", label: "Huevos" },
  { value: "fish", label: "Pescado" },
  { value: "peanuts", label: "Cacahuetes" },
  { value: "soy", label: "Soja" },
  { value: "dairy", label: "Lácteos" },
  { value: "nuts", label: "Frutos secos" },
  { value: "celery", label: "Apio" },
  { value: "mustard", label: "Mostaza" },
  { value: "sesame", label: "Sésamo" },
  { value: "sulfites", label: "Sulfitos" },
  { value: "lupin", label: "Altramuces" },
  { value: "molluscs", label: "Moluscos" },
];

export const MenuItemsManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    image_url: "",
    allergens: [] as string[],
    is_featured: false,
    display_order: 0,
  });

  const { data: items } = useQuery({
    queryKey: ["admin-menu-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*, menu_categories(name)")
        .order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_categories")
        .select("*")
        .order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase.from("menu_items").insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-menu-items"] });
      toast({ title: "Plato creado exitosamente" });
      setOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const { error } = await supabase
        .from("menu_items")
        .update(data)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-menu-items"] });
      toast({ title: "Plato actualizado exitosamente" });
      setOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("menu_items").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-menu-items"] });
      toast({ title: "Plato eliminado exitosamente" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      category_id: "",
      image_url: "",
      allergens: [],
      is_featured: false,
      display_order: 0,
    });
    setEditingItem(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      price: parseFloat(formData.price),
    };

    if (editingItem) {
      updateMutation.mutate({ id: editingItem.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description || "",
      price: item.price.toString(),
      category_id: item.category_id,
      image_url: item.image_url || "",
      allergens: item.allergens || [],
      is_featured: item.is_featured,
      display_order: item.display_order,
    });
    setOpen(true);
  };

  const toggleAllergen = (allergen: string) => {
    setFormData((prev) => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter((a) => a !== allergen)
        : [...prev.allergens, allergen],
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Gestión de Platos</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" /> Nuevo Plato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border-white/10">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingItem ? "Editar Plato" : "Nuevo Plato"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-white">Descripción</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-white">Precio (€)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                    className="bg-black/50 border-white/10 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="category" className="text-white">Categoría</Label>
                  <Select
                    value={formData.category_id}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category_id: value })
                    }
                  >
                    <SelectTrigger className="bg-black/50 border-white/10 text-white">
                      <SelectValue placeholder="Selecciona categoría" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-white/10">
                      {categories?.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id} className="text-white">
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="image_url" className="text-white">URL de Imagen</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>
              <div>
                <Label className="text-white">Alérgenos</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {allergenOptions.map((allergen) => (
                    <div key={allergen.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={allergen.value}
                        checked={formData.allergens.includes(allergen.value)}
                        onCheckedChange={() => toggleAllergen(allergen.value)}
                        className="border-white/20"
                      />
                      <label
                        htmlFor={allergen.value}
                        className="text-sm cursor-pointer text-white"
                      >
                        {allergen.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_featured: !!checked })
                  }
                  className="border-white/20"
                />
                <label htmlFor="is_featured" className="text-sm cursor-pointer text-white">
                  Plato destacado
                </label>
              </div>
              <div>
                <Label htmlFor="display_order" className="text-white">Orden de visualización</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      display_order: parseInt(e.target.value),
                    })
                  }
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                {editingItem ? "Actualizar" : "Crear"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {items?.map((item) => (
          <Card key={item.id} className={`bg-zinc-900 border-white/10 ${item.is_featured ? "border-primary" : ""}`}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                  <span>{item.name}</span>
                  {item.is_featured && (
                    <Badge variant="default" className="flex items-center gap-1 bg-primary">
                      <Star className="h-3 w-3 fill-current" />
                      Destacado
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteMutation.mutate(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/60 mb-2">
                {item.description}
              </p>
              <div className="flex justify-between text-sm text-white">
                <span className="font-semibold">Precio: {item.price}€</span>
                <span className="text-white/70">Categoría: {(item.menu_categories as any)?.name}</span>
              </div>
              {item.display_order > 0 && (
                <p className="text-xs text-white/50 mt-2">
                  Orden: {item.display_order}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

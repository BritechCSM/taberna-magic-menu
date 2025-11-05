export const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">La Taberna de Lara</h3>
            <p className="text-muted-foreground">
              Donde la tradición y el sabor se encuentran en cada plato.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horario</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Lunes - Viernes: 13:00 - 16:00, 20:00 - 23:30</p>
              <p>Sábados: 13:00 - 16:30, 20:00 - 00:00</p>
              <p>Domingos: 13:00 - 16:30</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Teléfono: +34 123 456 789</p>
              <p>Email: info@latabernadelara.es</p>
              <p>Dirección: Calle Ejemplo, 123</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} La Taberna de Lara. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

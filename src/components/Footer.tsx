import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>Calle Principal 123<br />28001 Madrid, España</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+34 912 345 678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>info@lataberna.es</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Horario</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Lunes - Viernes</p>
                  <p>13:00 - 16:00 | 20:00 - 23:30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sábados - Domingos</p>
                  <p>13:00 - 00:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">La Taberna</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Cocina tradicional española con los mejores ingredientes. 
              Ven a disfrutar de una experiencia gastronómica única en un 
              ambiente acogedor y familiar.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} La Taberna. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

import { useEffect } from "react";

export const MenuSection = () => {
  // Smooth scroll behavior for anchor links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
            LA TABERNA
          </h1>
          <h2 className="text-3xl md:text-4xl text-[#E89B3C] mb-8" style={{ fontFamily: 'serif' }}>
            Menú
          </h2>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-sm py-4 mb-8 rounded-lg border border-[#E89B3C]/30 shadow-lg">
          <nav className="flex flex-wrap justify-center gap-3 px-4">
            <a href="#tapas" onClick={(e) => handleScroll(e, '#tapas')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">TAPAS</a>
            <a href="#raciones" onClick={(e) => handleScroll(e, '#raciones')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">RACIONES</a>
            <a href="#ensaladas" onClick={(e) => handleScroll(e, '#ensaladas')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">ENSALADAS</a>
            <a href="#montaditos" onClick={(e) => handleScroll(e, '#montaditos')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">MONTADITOS</a>
            <a href="#bocadillos" onClick={(e) => handleScroll(e, '#bocadillos')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">BOCADILLOS</a>
            <a href="#arroces" onClick={(e) => handleScroll(e, '#arroces')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">ARROCES</a>
            <a href="#pescados" onClick={(e) => handleScroll(e, '#pescados')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">PESCADOS</a>
            <a href="#carnes" onClick={(e) => handleScroll(e, '#carnes')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">CARNES</a>
            <a href="#postres" onClick={(e) => handleScroll(e, '#postres')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">POSTRES</a>
            <a href="#bebidas" onClick={(e) => handleScroll(e, '#bebidas')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">BEBIDAS</a>
            <a href="#menus-grupo" onClick={(e) => handleScroll(e, '#menus-grupo')} className="px-4 py-2 bg-[#E89B3C] hover:bg-[#E89B3C]/80 text-black font-semibold rounded-lg transition-colors text-sm">MENÚS</a>
          </nav>
        </div>

        {/* TAPAS */}
        <div id="tapas" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Tapas</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-2 mb-4 text-black font-bold">
              <span></span>
              <span className="text-center">MEDIA</span>
              <span className="text-center">ENTERA</span>
            </div>
            <div className="space-y-2 text-black">
              <div className="grid grid-cols-3 gap-2"><span>MAGRO CON TOMATE</span><span className="text-center">-</span><span className="text-center">5.30€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>ENSALADILLA RUSA 🥚🥛</span><span className="text-center">3.20€</span><span className="text-center">5.80€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>ENSALADA DE PIMIENTOS 🥚🥛🐟🐚</span><span className="text-center">3.80€</span><span className="text-center">6.50€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>ENSALADA DE ROQUEFORT 🥚🥛🐟</span><span className="text-center">-</span><span className="text-center">7.10€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>AGRITOS CON ALIOLI</span><span className="text-center">-</span><span className="text-center">5.90€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>AGRIOS DE BACALAO 🥚🥛🐟</span><span className="text-center">-</span><span className="text-center">5.20€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>CHAMPIÑONES PLANCHA</span><span className="text-center">-</span><span className="text-center">4.50€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>PATATAS ALIOLI 🥚</span><span className="text-center">3.00€</span><span className="text-center">4.90€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>CHORIZO CRIOLLO</span><span className="text-center">-</span><span className="text-center">3.50€</span></div>
            </div>
          </div>
        </div>

        {/* RACIONES */}
        <div id="raciones" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Raciones</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-2 mb-4 text-black font-bold">
              <span></span>
              <span className="text-center">MEDIA</span>
              <span className="text-center">ENTERA</span>
            </div>
            <div className="space-y-2 text-black">
              <div className="grid grid-cols-3 gap-2"><span>EMPANADA ARGENTINA🥚</span><span className="text-center">3.20€</span><span className="text-center">-</span></div>
              <div className="grid grid-cols-3 gap-2"><span>CROQUETAS DE JAMÓN 🥚🥛🌾</span><span className="text-center">2.20€</span><span className="text-center">-</span></div>
              <div className="grid grid-cols-3 gap-2"><span>CROQUETAS DE BACALAO 🥚🥛🌾🐟</span><span className="text-center">2.20€</span><span className="text-center">-</span></div>
              <div className="grid grid-cols-3 gap-2"><span>PAN TOMATE Y ALIOLI 🥚</span><span className="text-center">3.50€</span><span className="text-center">-</span></div>
              <div className="grid grid-cols-3 gap-2"><span>BRAVAS 🥚</span><span className="text-center">-</span><span className="text-center">7.10€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>QUESO FRITO 🥛</span><span className="text-center">7.00€</span><span className="text-center">12.20€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>QUESO RULO PLANCHA 🥛</span><span className="text-center">6.00€</span><span className="text-center">9.90€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>QUESO CURADO CON NUECES 🥛🌰</span><span className="text-center">5.90€</span><span className="text-center">9.60€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>JAMÓN</span><span className="text-center">11.90€</span><span className="text-center">21.50€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>JAMÓN Y QUESO 🥛</span><span className="text-center">11.90€</span><span className="text-center">21.50€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>HUEVOS ROTOS CON JAMÓN 🥚</span><span className="text-center">-</span><span className="text-center">9.90€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>CALAMARES 🐚🥛</span><span className="text-center">6.20€</span><span className="text-center">10.20€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>GAMBAS 🐚</span><span className="text-center">6.20€</span><span className="text-center">10.20€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>CHIPIRONES 🐚🥛🌾</span><span className="text-center">6.20€</span><span className="text-center">10.20€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>PLANCHA FRITA 🥚🥛🌾</span><span className="text-center">6.20€</span><span className="text-center">10.20€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>BOQUERONES 🥚🐟</span><span className="text-center">5.20€</span><span className="text-center">10.50€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>PATAS</span><span className="text-center">6.20€</span><span className="text-center">10.30€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>TORREZNOS DE SORIA</span><span className="text-center">5.90€</span><span className="text-center">8.90€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>PARRILLADA DE VERDURAS</span><span className="text-center">-</span><span className="text-center">14.20€</span></div>
            </div>
          </div>
        </div>

        {/* ENSALADAS */}
        <div id="ensaladas" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Ensaladas</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-2 mb-4 text-black font-bold">
              <span></span>
              <span className="text-center">MEDIA</span>
              <span className="text-center">ENTERA</span>
            </div>
            <div className="space-y-2 text-black">
              <div className="grid grid-cols-3 gap-2"><span>DE LA CASA</span><span className="text-center">5.90€</span><span className="text-center">9.50€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>TOMATE TRINCHADO CAPELLÁN 🥚</span><span className="text-center">6.00€</span><span className="text-center">11.90€</span></div>
              <div className="grid grid-cols-3 gap-2"><span>SALADOS 🥚</span><span className="text-center">-</span><span className="text-center">18.50€</span></div>
            </div>
          </div>
        </div>

        {/* MONTADITOS */}
        <div id="montaditos" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Montaditos</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="space-y-2 text-black">
              <div className="flex justify-between"><span>TABERNERO 🥚🥛🌾</span><span>4.20€</span></div>
              <p className="text-sm">con carne, lomo, queso de cabra, pimiento verde, cebolla caramelizada</p>
              <div className="flex justify-between mt-2"><span>SERRANITO 🥚🥛</span><span>4.20€</span></div>
              <p className="text-sm">lomo, pimiento, jamón ibérico</p>
              <div className="flex justify-between mt-2"><span>BLANCO Y NEGRO 🥛</span><span>3.30€</span></div>
              <p className="text-sm">salchicha, morcilla</p>
              <div className="flex justify-between mt-2"><span>MEDIA VERBENA</span><span>12.90€</span></div>
              <p className="text-sm">3 fríos, 3 calientes</p>
              <div className="flex justify-between mt-2"><span>VERBENA</span><span>26.50€</span></div>
              <p className="text-sm">6 fríos, 6 calientes</p>
            </div>
          </div>
        </div>

        {/* BOCADILLOS */}
        <div id="bocadillos" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Bocadillos</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="space-y-3 text-black">
              <div>
                <div className="flex justify-between font-bold"><span>LARA 🥚🥛🌾</span><span>7.90€</span></div>
                <p className="text-sm">pollo crujiente, bacon, huevo, cebolla caramelizada, rulo de queso de cabra</p>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>TABERNERO 🥚🌾</span><span>8.70€</span></div>
                <p className="text-sm">con carne, lomo, queso de cabra, pimiento verde, cebolla caramelizada</p>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>SERRANITO 🥚🌾</span><span>7.90€</span></div>
                <p className="text-sm">lomo, pimiento, jamón ibérico</p>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>CALAMARES 🥚🥛🌾🐚</span><span>6.20€</span></div>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>PEPITO</span><span>7.20€</span></div>
              </div>
              <div>
                <div className="flex justify-between font-bold"><span>INDAR GORRI 🥚🥛🌾</span><span>7.70€</span></div>
                <p className="text-sm">lomo fresco, pimiento del piquillo, queso manchego, huevo</p>
              </div>
            </div>
          </div>
        </div>

        {/* ARROCES */}
        <div id="arroces" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Arroces</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <p className="text-black mb-4 font-semibold">(mínimo 2 personas)</p>
            <div className="space-y-2 text-black">
              <div className="flex justify-between"><span>A BANDA 🐚</span><span>13.90€</span></div>
              <div className="flex justify-between"><span>SEÑORET 🐚</span><span>14.90€</span></div>
              <div className="flex justify-between mt-4"><span className="font-bold">POR ENCARGO (mínimo 2 personas)</span></div>
              <div className="flex justify-between"><span>ARROZ SOLOMILLO Y VERDURAS</span><span>14.90€</span></div>
              <div className="flex justify-between"><span>GAZPACHO MANCHEGO</span><span>13.90€</span></div>
            </div>
          </div>
        </div>

        {/* PESCADOS */}
        <div id="pescados" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Pescados</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="space-y-2 text-black">
              <div className="flex justify-between"><span>GAMBAS ROJAS AL AJILLO 🥚🐚</span><span>8.80€</span></div>
              <div className="flex justify-between"><span>GAMBAS PLANCHA</span><span>13.90€</span></div>
              <div className="flex justify-between"><span>FRITURA 🥚🥛🌾🐚🐟</span><span>19.20€</span></div>
              <div className="flex justify-between"><span>PULPO A LA PLANCHA 🐚🥛</span><span>20.90€</span></div>
              <div className="flex justify-between"><span>CALAMAR NACIONAL</span><span>16.50€</span></div>
            </div>
          </div>
        </div>

        {/* CARNES */}
        <div id="carnes" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Carnes</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="space-y-2 text-black">
              <div className="flex justify-between"><span>ASADO (churrascos) de ternera</span><span>16.20€</span></div>
              <div className="flex justify-between"><span>ENTRAÑA DE TERNERA corte Argentino, coco-churri</span><span>18.20€</span></div>
              <div className="flex justify-between"><span>MILANESA A LA NAPOLITANA</span><span>18.20€</span></div>
              <p className="text-sm">(filete argentino empanado con tomate, jamón york, mozzarella)</p>
              <div className="flex justify-between mt-2"><span>MILANESA A CABALLO</span><span>16.50€</span></div>
              <div className="flex justify-between"><span>SOLOMILLO CERDO</span><span>17.50€</span></div>
              <div className="flex justify-between"><span>ENTRECOT ASTURIAS</span><span>24.50€</span></div>
            </div>
          </div>
        </div>

        {/* POSTRES */}
        <div id="postres" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Postres</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="space-y-2 text-black">
              <div className="flex justify-between"><span>FLAN DE HUEVO CASERO 🥚🥛</span><span>3.50€</span></div>
              <div className="flex justify-between"><span>PAN DE CALATRAVA 🥚🥛</span><span>3.50€</span></div>
              <div className="flex justify-between"><span>TARTA DE QUESO 🥚🥛🌾</span><span>4.50€</span></div>
              <div className="flex justify-between"><span>TARTA DE CHOCOLATE 🥚🥛🌾🌰</span><span>4.50€</span></div>
              <div className="flex justify-between"><span>BROWNIE CHOCOLATE 🥚🥛🌰</span><span>3.50€</span></div>
              <div className="flex justify-between"><span>HELADOS (variados) 🥚🥛</span><span>3.20€</span></div>
              <div className="flex justify-between"><span>PIÑA NATURAL</span><span>3.50€</span></div>
              <div className="flex justify-between"><span>FRUTA DE TEMPORADA</span><span>3.50€</span></div>
            </div>
          </div>
        </div>

        {/* BEBIDAS */}
        <div id="bebidas" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Bebidas</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 text-black">
                <div className="font-bold text-lg mb-3">Bebidas sin alcohol</div>
                <div className="flex justify-between"><span>AGUA</span><span>1.80€</span></div>
                <div className="flex justify-between"><span>REFRESCOS</span><span>2.50€</span></div>
                <div className="flex justify-between"><span>ZUMOS</span><span>2.80€</span></div>
                <div className="flex justify-between"><span>CAFÉ/INFUSIONES</span><span>1.50€</span></div>
              </div>
              <div className="space-y-2 text-black">
                <div className="font-bold text-lg mb-3">Bebidas alcohólicas</div>
                <div className="flex justify-between"><span>CERVEZA CAÑA</span><span>1.80€</span></div>
                <div className="flex justify-between"><span>CERVEZA BOTELLA/LATA</span><span>2.50€</span></div>
                <div className="flex justify-between"><span>VINO COPA</span><span>2.00€</span></div>
                <div className="flex justify-between"><span>VINO BOTELLA</span><span>desde 9.00€</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* MENÚS DE GRUPO */}
        <div id="menus-grupo" className="mb-12 scroll-mt-32">
          <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Menús de Grupo</h3>
          <div className="bg-[#E89B3C] p-6 rounded-lg">
            <p className="text-black mb-6 font-semibold">(Reserva previa - Mínimo 10 personas)</p>
            
            <div className="space-y-6 text-black">
              <div className="border-b border-black/20 pb-4">
                <div className="flex justify-between font-bold text-lg mb-3">
                  <span>MENÚ 1</span>
                  <span>25€/persona</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Ensaladilla rusa</li>
                  <li>• Croquetas caseras</li>
                  <li>• Jamón ibérico</li>
                  <li>• Calamares</li>
                  <li>• Postre casero</li>
                  <li>• Bebida incluida</li>
                </ul>
              </div>

              <div className="border-b border-black/20 pb-4">
                <div className="flex justify-between font-bold text-lg mb-3">
                  <span>MENÚ 2</span>
                  <span>30€/persona</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Tabla de quesos</li>
                  <li>• Croquetas variadas</li>
                  <li>• Jamón y queso</li>
                  <li>• Arroz del Señoret</li>
                  <li>• Postre casero</li>
                  <li>• Bebida incluida</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-lg mb-3">
                  <span>MENÚ 3</span>
                  <span>35€/persona</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Ensalada de pimientos</li>
                  <li>• Jamón ibérico y queso</li>
                  <li>• Croquetas variadas</li>
                  <li>• Arroz del Señoret</li>
                  <li>• Carne a la parrilla</li>
                  <li>• Postre casero</li>
                  <li>• Bebida y café incluidos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Alérgenos: 🥚 Huevo | 🥛 Lácteos | 🌾 Gluten | 🐟 Pescado | 🐚 Marisco | 🌰 Frutos secos</p>
          <p className="mt-2">Los precios pueden variar según temporada y disponibilidad</p>
        </div>
      </div>
    </section>
  );
};

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import darkTexture from "@/assets/dark-texture.jpg";

const Menu = () => {
  // Smooth scroll behavior for anchor links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const offset = 100; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `url(${darkTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
              LA TABERNA
            </h1>
            <h2 className="text-3xl md:text-4xl text-[#E89B3C] mb-8" style={{ fontFamily: 'serif' }}>
              Menú
            </h2>
          </div>

          {/* Sticky Navigation */}
          <div className="sticky top-20 z-20 bg-[#195 20% 15%]/95 backdrop-blur-sm py-4 mb-8 rounded-lg border border-[#E89B3C]/30">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-2 text-black">
                <div className="flex justify-between"><span>GAMBAS ROJAS AL AJILLO 🥚🐚</span><span>8.80€</span></div>
                <div className="flex justify-between"><span>GAMBAS PLANCHA</span><span>13.90€</span></div>
                <div className="flex justify-between"><span>FRITURA 🥚🥛🌾🐚🐟</span><span>19.20€</span></div>
                <div className="flex justify-between"><span>PULPO A LA PLANCHA 🐚🥛</span><span>20.90€</span></div>
                <div className="flex justify-between"><span>CALAMAR NACIONAL</span><span>16.50</span></div>
              </div>
            </div>
          </div>

          {/* CARNES */}
          <div id="carnes" className="mb-12 scroll-mt-32">
            <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Carnes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-2 text-black">
                <div className="flex justify-between"><span>FLAN DE HUEVO CASERO 🥚🥛</span><span>3.50€</span></div>
                <div className="flex justify-between"><span>PAN DE CALATRAVA 🥚🥛</span><span>3.50€</span></div>
                <div className="flex justify-between"><span>TARTA DE QUESO 🥚🥛🌾</span><span>4.50€</span></div>
                <div className="flex justify-between"><span>TARTA DE CHOCOLATE 🥚🥛🌾🌰</span><span>4.50€</span></div>
                <div className="flex justify-between"><span>TARTA OREO 🥚🥛🌾</span><span>4.50€</span></div>
                <div className="flex justify-between"><span>TARTA FERRERO 🥚🥛🌾🌰</span><span>4.50€</span></div>
                <div className="flex justify-between mt-4"><span className="font-bold">TABLA DE POSTRES</span></div>
                <div className="flex justify-between"><span>PEQUEÑA (4/5 personas)</span><span>12.00€</span></div>
                <div className="flex justify-between"><span>GRANDE (6/8 personas)</span><span>18.00€</span></div>
              </div>
            </div>
          </div>

          {/* BEBIDAS - Refrescos */}
          <div id="bebidas" className="mb-12 scroll-mt-32">
            <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Bebidas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-black">Refrescos 350 C.C.</h4>
                <div className="space-y-2 text-black">
                  <div className="flex justify-between"><span>COCA-COO C.C</span><span>1.35€</span></div>
                  <div className="flex justify-between"><span>AGUA CON GAS</span><span>2.50€</span></div>
                  <div className="flex justify-between"><span>REFRESCOS</span><span>2.60€</span></div>
                  <div className="flex justify-between"><span>NESTEA</span><span>2.60€</span></div>
                  <div className="flex justify-between"><span>SPRITE</span><span>2.60€</span></div>
                  <div className="flex justify-between"><span>TÓNICA SCHWEPPES</span><span>2.70€</span></div>
                  <div className="flex justify-between"><span>BITTER KAS</span><span>2.70€</span></div>
                  <div className="flex justify-between"><span>RED BULL</span><span>3.50€</span></div>
                  <div className="flex justify-between"><span>ZUMOS (don - melocotón)</span><span>2.10€</span></div>
                </div>
              </div>

              {/* Cervezas */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-black">Cervezas</h4>
                <div className="text-xs text-black mb-2">1/3 CAÑA PINTA 1L</div>
                <div className="space-y-2 text-black text-sm">
                  <div className="flex justify-between"><span>ÁGUILA - AMSTEL</span><span>2.30€ 2.10€ 4.20€ 6.90€</span></div>
                  <div className="flex justify-between"><span>ÁGUILA SIN FILTRAR</span><span>2.70€ 5.10€ 9.50€</span></div>
                  <div className="flex justify-between"><span>RADLER</span><span>3.20€ 5.20€ 9.50€</span></div>
                  <div className="flex justify-between"><span>HEINEKEN</span><span>2.90€</span></div>
                  <div className="flex justify-between"><span>18/70</span><span>2.90€</span></div>
                  <div className="flex justify-between"><span>AMSTEL 0.0</span><span>2.70€</span></div>
                  <div className="flex justify-between"><span>AMSTEL 0.0 TOSTADA</span><span>2.70€</span></div>
                  <div className="flex justify-between"><span>AMSTEL TOSTADA</span><span>2.70€</span></div>
                  <div className="flex justify-between"><span>CARLSBERG MANZANAS</span><span>2.80€</span></div>
                  <div className="flex justify-between"><span>TINTO DE VERANO</span><span>3.20€ 5.20€ 9.50€</span></div>
                </div>
              </div>

              {/* Vinos */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-black">Vinos</h4>
                <div className="text-sm text-black mb-2">COPA / BOTELLA</div>
                <div className="space-y-2 text-black text-sm">
                  <div className="flex justify-between"><span>BLANCO O ROSADO ALICANTE</span><span>2.50€ 10.90€</span></div>
                  <div className="flex justify-between"><span>RIOJA JOVEN</span><span>2.80€ 12.50€</span></div>
                  <div className="flex justify-between"><span>RIOJA CRIANZA</span><span>3.30€ 15.50€</span></div>
                  <div className="flex justify-between"><span>MALBEC ARGENTINO</span><span>3.80€ 16.50€</span></div>
                  <div className="flex justify-between"><span>RIBERA</span><span>3.00€ 15.50€</span></div>
                  <div className="flex justify-between"><span>MOSCATEL</span><span>3.00€ 11.50€</span></div>
                  <div className="flex justify-between"><span>VERMUTH</span><span>3.80€</span></div>
                  <div className="flex justify-between"><span>VERMUTH CON REFRESCO</span><span>4.70€</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* MENÚS DE GRUPO */}
          <div id="menus-grupo" className="mb-12 scroll-mt-32">
            <h3 className="text-3xl font-bold text-[#E89B3C] mb-6" style={{ fontFamily: 'serif' }}>Menús de Grupos</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6">
              <h2 className="text-2xl font-bold text-black mb-2">MÍNIMO 4 PERSONAS PRECIO POR PERSONA</h2>
              <p className="text-black font-semibold">TODA LA MESA DEBERÁ PEDIR MISMO MENÚ</p>
              <p className="text-sm text-black font-bold mt-2">TODOS NUESTROS MENÚS INCLUYEN:</p>
              <p className="text-sm text-black">PLATOS FROSTI AL CENTRO O P.S. BEBIDAS DURANTE LA COMIDA, CERVEZA AMSTEL, COCA-COLA, FANTA DE LIMÓN Y NARANJA, TINTO DE VERANO, VINO DE LA CASA, REFRESCOS</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* MENÚ 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-black">MENÚ 1</h4>
                  <p className="text-3xl font-bold text-black">33.50€</p>
                </div>
                <ul className="text-black space-y-1 text-sm list-disc list-inside">
                  <li>ENSALADILLA RUSA</li>
                  <li>QUESO FRITO</li>
                  <li>JAMÓN IBÉRICO</li>
                  <li>CALAMARES ANDALUZA</li>
                  <li>SOLOMILLO DE CERDO CON SALSA</li>
                  <li>** OPCIÓN: ARROZ A BANDA O SEÑORET</li>
                  <li>POSTRE</li>
                </ul>
              </div>

              {/* MENÚ 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-black">MENÚ 2</h4>
                  <p className="text-3xl font-bold text-black">32.50€</p>
                </div>
                <ul className="text-black space-y-1 text-sm list-disc list-inside">
                  <li>PATATAS BRAVAS</li>
                  <li>PAN CON TOMATE Y ALIOLI</li>
                  <li>GAMBAS ROJAS</li>
                  <li>PULPO A LA PLANCHA</li>
                  <li>JAMÓN IBÉRICO Y QUESO CURADO</li>
                  <li>ENSALADA DE LA CASA</li>
                  <li>ENTRECOT ASTURIAS HORNEADO AL CENTRO CON GUARNICIÓN</li>
                  <li>POSTRE</li>
                </ul>
              </div>

              {/* MENÚ 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-black">MENÚ 3</h4>
                  <p className="text-3xl font-bold text-black">29.50€</p>
                </div>
                <ul className="text-black space-y-1 text-sm list-disc list-inside">
                  <li>CROQUETAS CASERAS</li>
                  <li>SEPIA A LA PLANCHA</li>
                  <li>FRITURA DE PESCADOS</li>
                  <li>HUEVOS ROTOS CON JAMÓN</li>
                  <li>VERBENA DE MONTADITOS</li>
                  <li>POSTRE</li>
                </ul>
              </div>

              {/* MENÚ 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-black">MENÚ 4</h4>
                  <p className="text-3xl font-bold text-black">26.90€</p>
                </div>
                <ul className="text-black space-y-1 text-sm list-disc list-inside">
                  <li>PATATAS BRAVAS</li>
                  <li>ALBÓNDIGAS AL ROQUEFORT</li>
                  <li>QUESO DE RULO A LA PLANCHA</li>
                  <li>TORREZNOS DE SORIA</li>
                  <li>CAZÓN EN ADOBO</li>
                  <li>CHIPIRONES</li>
                  <li>POSTRE</li>
                </ul>
              </div>

              {/* MENÚ 5 - PICOTEO */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-black">MENÚ 5 PICOTEO</h4>
                  <p className="text-3xl font-bold text-black">19.50€</p>
                  <p className="text-sm text-black font-semibold">(Mínimo 6 personas)</p>
                </div>
                <ul className="text-black space-y-1 text-sm list-disc list-inside">
                  <li>PAN CON TOMATE Y ALIOLI</li>
                  <li>ENSALADILLA RUSA</li>
                  <li>CALAMARES</li>
                  <li>PATATAS BRAVAS</li>
                  <li>TORREZNOS</li>
                  <li>BOCADILLOS</li>
                  <li>1 BEBIDA POR PERSONA</li>
                </ul>
              </div>

              {/* MENÚ ARGENTINO */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-black">MENÚ ARGENTINO</h4>
                  <p className="text-3xl font-bold text-black">21.90€</p>
                </div>
                <ul className="text-black space-y-1 text-sm">
                  <li>Empanada +</li>
                  <li>Chorizo criollo +</li>
                  <li>Entraña con patatas fritas</li>
                  <li className="text-center font-semibold">o</li>
                  <li>Asado de Ternera con patatas fritas (Churrasco)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SUGERENCIAS */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>SUGERENCIAS LA TABERNA</h3>
            <div className="text-black space-y-4">
              <div>
                <p className="font-bold text-xl mb-2">Ármalos a tu gusto!</p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="font-semibold">MONTADITO</p>
                    <p className="text-sm">1.00€ c/u</p>
                  </div>
                  <div>
                    <p className="font-semibold">BOCADILLO</p>
                    <p className="text-sm">4.50€ c/u</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p><strong>HUEVO, SOLOMILLO, ANCHOA,</strong> 1.30€ c/u | <strong>1.90€ c/u</strong></p>
                  <p><strong>HUEVA, MOJAMA, SALMÓN</strong> 1.30€ c/u | <strong>1.90€ c/u</strong></p>
                  <p><strong>QUESO, LOMO, CHORIZO,</strong> 1.00€ c/u | <strong>1.50€ c/u</strong></p>
                  <p><strong>CHIS TORRA, PECHUGA TERNERA,</strong> 1.00€ c/u | <strong>1.50€ c/u</strong></p>
                  <p><strong>SALCHICHA, MORCILLA, ATÚN</strong></p>
                  <p><strong>QUESO, QUESO MANCHEGO,</strong></p>
                  <p><strong>TOMATE, HUEVO, CEBOLLA,</strong></p>
                  <p><strong>CEBOLLA CARAMELIZADA</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Separador blanco */}
      <div className="h-20 bg-white"></div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Menu;

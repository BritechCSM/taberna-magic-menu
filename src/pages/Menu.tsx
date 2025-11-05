import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import darkTexture from "@/assets/dark-texture.jpg";

const Menu = () => {
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

          {/* Menu Sections Column */}
          <div className="text-white space-y-8 max-w-md">
            <div className="text-2xl md:text-3xl font-bold space-y-4" style={{ fontFamily: 'serif' }}>
              <p>RACIONES</p>
              <p>TAPAS</p>
              <p>ENSALADAS</p>
              <p>MONTADITOS</p>
              <p>BOCADILLOS</p>
              <p>ARROCES</p>
              <p>PESCADOS</p>
              <p>CARNES</p>
              <p>POSTRES</p>
              <p>BEBIDAS</p>
              <p>MENÚS DE GRUPO</p>
            </div>
          </div>

          {/* Full Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            
            {/* Refrescos */}
            <div className="bg-[#E89B3C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">Refrescos 350 C.C.</h3>
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
            <div className="bg-[#E89B3C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">Cervezas</h3>
              <div className="text-sm text-black mb-2">1/3 CAÑA PINTA 1L</div>
              <div className="space-y-2 text-black">
                <div className="flex justify-between"><span>ÁGUILA - AMSTEL</span><span className="text-xs">2.30€ 2.10€ 4.20€ 6.90€</span></div>
                <div className="flex justify-between"><span>ÁGUILA SIN FILTRAR</span><span className="text-xs">2.70€ 5.10€ 9.50€</span></div>
                <div className="flex justify-between"><span>RADLER</span><span className="text-xs">3.20€ 5.20€ 9.50€</span></div>
                <div className="flex justify-between"><span>HEINEKEN</span><span>2.90€</span></div>
                <div className="flex justify-between"><span>18/70</span><span>2.90€</span></div>
                <div className="flex justify-between"><span>AMSTEL 0.0</span><span>2.70€</span></div>
                <div className="flex justify-between"><span>AMSTEL 0.0 TOSTADA</span><span>2.70€</span></div>
                <div className="flex justify-between"><span>AMSTEL TOSTADA</span><span>2.70€</span></div>
                <div className="flex justify-between"><span>CARLSBERG MANZANAS</span><span>2.80€</span></div>
                <div className="flex justify-between"><span>TINTO DE VERANO</span><span className="text-xs">3.20€ 5.20€ 9.50€</span></div>
              </div>
            </div>

            {/* Vinos */}
            <div className="bg-[#E89B3C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-black">Vinos</h3>
              <div className="text-sm text-black mb-2">COPA / BOTELLA</div>
              <div className="space-y-2 text-black">
                <div className="flex justify-between"><span>BLANCO O ROSADO ALICANTE</span><span className="text-xs">2.50€ 10.90€</span></div>
                <div className="flex justify-between"><span>RIOJA JOVEN</span><span className="text-xs">2.80€ 12.50€</span></div>
                <div className="flex justify-between"><span>RIOJA CRIANZA</span><span className="text-xs">3.30€ 15.50€</span></div>
                <div className="flex justify-between"><span>MALBEC ARGENTINO</span><span className="text-xs">3.80€ 16.50€</span></div>
                <div className="flex justify-between"><span>RIBERA</span><span className="text-xs">3.00€ 15.50€</span></div>
                <div className="flex justify-between"><span>MOSCATEL</span><span className="text-xs">3.00€ 11.50€</span></div>
                <div className="flex justify-between"><span>VERMUTH</span><span>3.80€</span></div>
                <div className="flex justify-between"><span>VERMUTH CON REFRESCO</span><span>4.70€</span></div>
              </div>
            </div>

            {/* Menú de Grupos - Header */}
            <div className="lg:col-span-3 bg-[#E89B3C] p-6 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-black mb-2">Menús de Grupos</h2>
              <p className="text-black font-semibold">MÍNIMO 4 PERSONAS PRECIO POR PERSONA</p>
              <p className="text-sm text-black">TODA LA MESA DEBERÁ PEDIR MISMO MENÚ</p>
              <p className="text-sm text-black font-bold">TODOS NUESTROS MENÚS INCLUYEN:</p>
              <p className="text-sm text-black">PLATOS FROSTI AL CENTRO O P.S. BEBIDAS DURANTE LA COMIDA, CERVEZA AMSTEL, COCACOLA, FANTA DE LIMÓN Y VERANO, VINO DE LA CASA, REFRESCOS</p>
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

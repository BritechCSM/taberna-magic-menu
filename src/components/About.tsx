import restaurantInterior from "@/assets/restaurant-interior.jpg";
import darkTexture from "@/assets/dark-texture.jpg";

export const About = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${darkTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Sobre Nosotros</h2>
            <p className="text-lg text-gray-300">
              Bienvenidos a La Taberna de Lara, donde la tradición y el sabor se encuentran. 
              Nuestra pasión es ofrecer platos auténticos y un ambiente acogedor que te hará 
              sentir como en casa.
            </p>
            <p className="text-lg text-gray-300">
              Cada ingrediente es seleccionado con cuidado para brindarte una experiencia 
              culinaria única. ¡Ven y descubre por qué somos el rincón favorito de los 
              amantes de la buena comida!
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={restaurantInterior} 
              alt="Interior del restaurante" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

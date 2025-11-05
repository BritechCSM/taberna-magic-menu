import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "34912345678"; // Cambia esto por el número real
  const message = "Hola, me gustaría hacer una reserva";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
};

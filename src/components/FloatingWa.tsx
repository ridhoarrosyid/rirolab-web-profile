import { MessageCircle } from "lucide-react";
import { trackWAConversion } from "../utils/analytics";

export default function FloatingWa() {
  const message =
    "https://wa.me/6285183303954?text=Halo%20Rirolab!%20Saya%20butuh%20bantuan%20atau%20ingin%20konsultasi%20cepat%20mengenai%20website%20bisnis%20saya";
  return (
    <a
      href={message}
      target="_blank"
      onClick={(e) => trackWAConversion(e, message)}
      rel="noopener noreferrer"
      className="animate-bounce-slow fixed right-6 bottom-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

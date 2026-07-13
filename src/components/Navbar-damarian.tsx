import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoBiznis from "../assets/icons/damarinbiznis.webp";
import { trackWAConversion } from "../utils/analytics";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const waLinkNavbar =
    "https://wa.me/6285183303954?text=Halo%20Kak%2C%20saya%20ingin%20berdiskusi%20mengenai%20layanan%20pembuatan%20website%20untuk%20bisnis%20saya.";

  // Fungsi untuk menutup menu mobile saat link diklik
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <div className="text-2xl font-bold tracking-tight text-blue-950">
              <img
                src={LogoBiznis}
                alt="Damarian Biznis Logo"
                className="w-14 rounded-full bg-white p-1 dark:bg-slate-100"
              />
            </div>
          </div>

          <div className="hidden md:flex">
            <a
              href={waLinkNavbar}
              onClick={(e) => trackWAConversion(e, waLinkNavbar)}
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full bg-blue-950 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition-all hover:scale-105 hover:bg-blue-900"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-950 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b border-gray-100 bg-white md:hidden">
          <div className="space-y-2 px-4 pt-2 pb-6">
            <a
              href={waLinkNavbar}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                closeMenu();
                trackWAConversion(e, waLinkNavbar);
              }}
              className="mt-4 block w-full rounded-full bg-blue-950 px-6 py-3 text-center text-sm font-medium text-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

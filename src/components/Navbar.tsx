import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import LogoRirolab from "../assets/icons/logo-rirolab.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname; // Otomatis mendeteksi path saat ini
  const waLinkNavbar =
    "https://wa.me/6285183303954?text=Halo%20Rirolab%2C%20saya%20ingin%20berdiskusi%20mengenai%20layanan%20pembuatan%20website%20untuk%20bisnis%20saya.";

  // Fungsi untuk menutup menu mobile saat link diklik
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-blue-950"
            >
              <img
                src={LogoRirolab}
                alt="Rirolab Logo"
                className="w-14 rounded-full bg-white p-1"
              />
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {/* Beranda */}
            <div className="relative">
              <Link
                to="/"
                className={`text-sm transition-colors ${activePath === "/" ? "font-bold text-blue-950" : "font-medium text-gray-500 hover:text-blue-600"}`}
              >
                Beranda
              </Link>
              {activePath === "/" && (
                <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-950"></div>
              )}
            </div>

            {/* Tentang Kami */}
            <div className="relative">
              <Link
                to="/about"
                className={`text-sm transition-colors ${activePath === "/about" ? "font-bold text-blue-950" : "font-medium text-gray-500 hover:text-blue-600"}`}
              >
                Tentang Kami
              </Link>
              {activePath === "/about" && (
                <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-950"></div>
              )}
            </div>

            {/* Harga */}
            <div className="relative">
              <Link
                to="/price"
                className={`text-sm transition-colors ${activePath === "/price" ? "font-bold text-blue-950" : "font-medium text-gray-500 hover:text-blue-600"}`}
              >
                Harga
              </Link>
              {activePath === "/price" && (
                <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-950"></div>
              )}
            </div>
          </div>

          <div className="hidden md:flex">
            <a
              href={waLinkNavbar}
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
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-3 py-2 text-base ${activePath === "/" ? "rounded-lg bg-blue-50 font-bold text-blue-950" : "font-medium text-gray-600"}`}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`block px-3 py-2 text-base ${activePath === "/about" ? "rounded-lg bg-blue-50 font-bold text-blue-950" : "font-medium text-gray-600"}`}
            >
              Tentang Kami
            </Link>
            <Link
              to="/price"
              onClick={closeMenu}
              className={`block px-3 py-2 text-base ${activePath === "/price" ? "rounded-lg bg-blue-50 font-bold text-blue-950" : "font-medium text-gray-600"}`}
            >
              Harga
            </Link>
            <a
              href={waLinkNavbar}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
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

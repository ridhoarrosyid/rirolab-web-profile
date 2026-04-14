import { Link } from "react-router";
import Instagram from "../assets/icons/Instagram";
import Facebook from "../assets/icons/Facebook";
import LogoRirolab from "../assets/icons/logo-rirolab.webp";
import { trackWAConversion } from "../utils/analytics";

export default function Footer() {
  const waLink =
    "https://wa.me/6285183303954?text=Halo%20Rirolab%2C%20saya%20mengunjungi%20website%20Anda%20dan%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20yang%20tersedia";

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="mb-4 inline-block text-2xl font-bold tracking-tight text-blue-950"
            >
              <img
                src={LogoRirolab}
                alt="Rirolab Logo"
                className="w-14 rounded-full bg-white p-1"
              />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-500">
              Wajah Digital untuk Bisnis Profesional. Kami membantu bisnis B2B
              dan profesional tampil meyakinkan di era digital.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/riro.lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-blue-600 hover:text-blue-600"
              >
                <Instagram className="size-5 fill-blue-950 hover:fill-gray-950" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585492015996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-blue-600 hover:text-blue-600"
              >
                <Facebook className="size-5 fill-blue-950 hover:fill-gray-950" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-gray-900 uppercase">
              Navigasi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/price"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-gray-900 uppercase">
              Legal & Bantuan
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  onClick={trackWAConversion}
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  Hubungi Kami
                </a>
              </li>

              {/* <li>
                <Link
                  to="#"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  Privasi
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  Syarat & Ketentuan
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rirolab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

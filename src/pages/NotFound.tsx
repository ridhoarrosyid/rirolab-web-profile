import { SearchX, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="animate-in fade-in flex min-h-[70vh] flex-col items-center justify-center px-4 py-40 text-center duration-500 sm:px-6 lg:px-8">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 shadow-sm">
        <SearchX size={40} />
      </div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-600">
        Maaf, rute yang Anda cari sepertinya tidak ada, telah dipindahkan, atau
        Anda salah memasukkan URL.
      </p>
      <Link
        to="/"
        className="flex transform items-center gap-2 rounded-full bg-blue-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1 hover:bg-blue-900"
      >
        <ArrowLeft size={18} />
        Kembali ke Beranda
      </Link>
    </div>
  );
}

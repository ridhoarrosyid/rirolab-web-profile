import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  TrendingDown,
  SearchX,
  LayoutTemplate,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router";
import PutriCandiDesktop from "../assets/images/putri-candi.webp";
import FloatingWa from "../components/FloatingWa";
import { projectsHome } from "../data";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const waLinkHero =
    "https://wa.me/6285183303954?text=Halo%20Rirolab%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis%20mengenai%20pembuatan%20wajah%20digital%20untuk%20bisnis%20saya";
  const waLinkCTA =
    "https://wa.me/6285183303954?text=Halo%20Rirolab%2C%20saya%20siap%20membangun%20kredibilitas%20digital%20bisnis%20saya.%20Saya%20ingin%20menjadwalkan%20konsultasi%20gratis";

  return (
    <>
      <Helmet>
        <title>Rirolab | Wajah Digital untuk Bisnis Profesional</title>
        <meta
          name="description"
          content="Web agency terbaik untuk jasa pembuatan website, landing page, dan company profile. Solusi digital strategis untuk B2B dan perusahaan konstruksi di Lampung dan Jakarta."
        />
        <meta
          name="keywords"
          content="jasa pembuatan website di lampung, web agency lampung terbaik, jasa pembuatan website B2B jakarta, pembuatan web perusahaan konstruksi, jasa pembuatan website perusahaan di jakarta"
        />
      </Helmet>
      <div className="min-h-screen overflow-x-hidden bg-gray-50 font-sans text-slate-900">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 space-y-8 duration-700">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase">
                Rirolab Profil
              </div>
              <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-blue-950 lg:text-6xl">
                Wajah Digital <br />
                <span className="text-blue-900">untuk Bisnis Profesional</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                Membangun identitas digital B2B yang solid melalui website yang
                profesional dan terukur, dirancang khusus untuk meningkatkan
                konversi dan kredibilitas bisnis Anda.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={waLinkHero}
                  className="flex transform items-center gap-2 rounded-full bg-blue-950 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1 hover:bg-blue-900"
                >
                  <MessageCircle size={18} />
                  Konsultasi via WhatsApp
                </a>
                <a href="#portfolio">
                  <button className="flex transform items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 font-medium text-blue-950 transition-all hover:-translate-y-1 hover:bg-gray-50">
                    Lihat Portofolio
                  </button>
                </a>
              </div>
            </div>
            <div className="group perspective relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Image Placeholder - Tambahkan src gambar Anda di sini */}
                <img
                  src={PutriCandiDesktop}
                  alt="Dashboard Preview"
                  className="h-full w-full object-cover opacity-80"
                />

                {/* Mockup UI decorations */}
                {/* <div className="absolute top-0 flex h-8 w-full items-center gap-2 border-b border-slate-700/50 bg-slate-800/50 px-4 backdrop-blur-sm">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
              </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        {/* <section className="border-y border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-medium tracking-wider text-gray-400 uppercase">
            Telah dipercaya oleh berbagai bisnis inovatif
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale md:gap-16">
           
            <div className="h-8 w-24 animate-pulse rounded bg-gray-300"></div>
            <div className="h-8 w-32 animate-pulse rounded bg-gray-300"></div>
            <div className="h-8 w-28 animate-pulse rounded bg-gray-300"></div>
            <div className="h-8 w-24 animate-pulse rounded bg-gray-300"></div>
            <div className="hidden h-8 w-32 animate-pulse rounded bg-gray-300 md:block"></div>
          </div>
        </div>
      </section> */}

        {/* Challenge & Solution Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Challenges */}
              <div className="space-y-10">
                <h2 className="text-3xl leading-tight font-bold text-blue-950 lg:text-4xl">
                  Tantangan Utama Bisnis B2B di Era Digital
                </h2>

                <div className="space-y-8">
                  <div className="group flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-all group-hover:scale-110 group-hover:bg-red-100">
                        <TrendingDown size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        Kredibilitas Rendah
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        Calon klien ragu mengambil keputusan bernilai besar
                        karena bisnis tidak memiliki representasi digital yang
                        meyakinkan.
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500 transition-all group-hover:scale-110 group-hover:bg-orange-100">
                        <SearchX size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        Sulit Mendapatkan Leads
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        Pengunjung website tidak berujung pada pengisian form
                        atau kontak ke sales (conversion rate sangat rendah).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-slate-50 p-8 transition-all duration-500 hover:shadow-xl lg:p-10">
                <div className="absolute top-0 right-0 transform p-8 opacity-10 transition-opacity duration-500 group-hover:scale-110 group-hover:opacity-20">
                  <ExternalLink size={120} className="text-blue-900" />
                </div>
                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-bold text-blue-950">
                    Solusi Terukur Rirolab
                  </h3>
                  <p className="mb-8 leading-relaxed text-gray-600">
                    Kami tidak sekadar mendesain web, kami membangun instrumen
                    penjualan 24/7 yang bekerja untuk pertumbuhan bisnis Anda.
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Desain Premium & Profesional",
                      "Optimasi Konversi B2B",
                      "Performa Kecepatan Tinggi",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2
                          size={20}
                          className="flex-shrink-0 text-blue-600"
                        />
                        <span className="font-medium text-gray-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="layanan" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase">
                Layanan Kami
              </span>
              <h2 className="text-3xl font-bold text-blue-950 lg:text-4xl">
                Instrumen Pertumbuhan Anda
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Service 1 */}
              <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <LayoutTemplate size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Landing Page
                </h3>
                <p className="mb-8 flex-grow leading-relaxed text-gray-600">
                  Halaman penawaran tunggal yang difokuskan pada satu tujuan
                  spesifik: mengubah pengunjung menjadi leads berkualitas
                  tinggi.
                </p>

                <div className="mb-8 flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-3xl font-black text-blue-200">01</span>
                  <span className="text-sm font-semibold text-slate-700">
                    FOKUS KONVERSI TINGGI
                  </span>
                </div>

                <Link to={"/price#landing-page"}>
                  <div className="group/link flex cursor-pointer items-center font-semibold text-blue-700">
                    Lihat Harga
                    <ArrowRight
                      size={18}
                      className="ml-2 transform transition-transform group-hover/link:translate-x-2"
                    />
                  </div>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Building2 size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Company Profile
                </h3>
                <p className="mb-8 flex-grow leading-relaxed text-gray-600">
                  Representasi digital komprehensif yang memperkuat visi,
                  values, dan kapabilitas perusahaan di mata stakeholder.
                </p>

                <div className="mb-8 flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-3xl font-black text-blue-200">02</span>
                  <span className="text-sm font-semibold text-slate-700">
                    KREDIBILITAS JANGKA PANJANG
                  </span>
                </div>
                <Link to={"/price#company-profile"}>
                  <div className="group/link flex cursor-pointer items-center font-semibold text-blue-700">
                    Lihat Harga
                    <ArrowRight
                      size={18}
                      className="ml-2 transform transition-transform group-hover/link:translate-x-2"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase">
                Studi Kasus
              </span>
              <h2 className="mb-4 text-3xl font-bold text-blue-950 lg:text-4xl">
                Transformasi Digital Pilihan
              </h2>
              <p className="text-gray-600">
                Melihat bagaimana kami membantu bisnis B2B dan konstruksi
                menonjol di pasar dengan kehadiran digital yang memukau.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectsHome.map((pkg, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl bg-gray-100">
                    {/* Tambahkan src gambar portfolio di sini */}
                    <img
                      src={pkg.image}
                      alt={`Gambar ${pkg.title}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900/0 transition-colors duration-300 group-hover:bg-blue-900/10"></div>
                  </div>
                  <div className="px-2">
                    <span className="mb-2 block text-xs font-semibold tracking-wider text-blue-600 uppercase">
                      {pkg.category}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 capitalize transition-colors group-hover:text-blue-700">
                      {pkg.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-10 text-center shadow-2xl lg:p-16">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-900 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl leading-tight font-bold text-white md:text-5xl">
                Siap Membangun Kredibilitas Digital Bisnis Anda?
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-blue-100">
                Jangan biarkan kompetitor mengambil langkah lebih dulu. Mari
                diskusikan kebutuhan digital bisnis Anda secara gratis (tanpa
                komitmen apapun).
              </p>
              <a
                href={waLinkCTA}
                className="group mx-auto flex transform items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-950 shadow-xl transition-all hover:scale-105 hover:bg-gray-50"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <FloatingWa />
      </div>
    </>
  );
}

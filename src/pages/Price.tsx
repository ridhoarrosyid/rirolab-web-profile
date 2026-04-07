import { CheckCircle2 } from "lucide-react";
import { companyProfilePackages, landingPagePackages } from "../data";
import FloatingWa from "../components/FloatingWa";
import { Helmet } from "react-helmet-async";

export default function Price() {
  return (
    <>
      <Helmet>
        <title>
          Harga Jasa Pembuatan Website & Landing Page Profesional | Rirolab
        </title>
        <meta
          name="description"
          content="Cek paket harga jasa pembuatan website, harga pembuatan landing page profesional, dan company profile di Rirolab. Transparan dan terjangkau untuk UMKM hingga Korporat."
        />
        <meta
          name="keywords"
          content="harga pembuatan landing page profesional, harga jasa pembuatan website, buat landing page lampung, jasa landing page bisnis profesional, biaya pembuatan company profile"
        />
        <meta
          property="og:title"
          content="Harga Jasa Pembuatan Website & Landing Page | Rirolab"
        />
        <meta
          property="og:description"
          content="Transparansi harga tanpa biaya tersembunyi untuk pembuatan landing page dan company profile profesional."
        />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden scroll-smooth bg-gray-50 font-sans text-slate-900">
        {/* Header Section */}
        <section className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 lg:px-8 lg:pt-40 lg:pb-16">
          <div className="animate-in fade-in slide-in-from-bottom-8 max-w-3xl duration-700">
            <div className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs font-bold tracking-widest text-blue-700 uppercase">
              INVESTASI BISNIS
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-extrabold text-blue-950 lg:text-5xl">
              Transparansi Harga Tanpa <br className="hidden md:block" />
              Biaya Tersembunyi.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Pilih paket yang paling sesuai dengan target pertumbuhan bisnis
              Anda. Kami menyediakan solusi website yang fokus pada hasil, baik
              untuk konversi iklan maupun kredibilitas korporasi.
            </p>
          </div>
        </section>

        {/* Pricing: Landing Page */}
        <section
          id="landing-page"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mb-10 flex flex-col border-l-4 border-blue-900 pl-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-1 text-2xl font-bold text-blue-950">
                Landing Page
              </h2>
              <p className="text-sm text-gray-600">
                Fokus: Konversi Penjualan & Optimasi Iklan
              </p>
            </div>
            <div className="mt-4 text-sm font-medium text-gray-500 md:mt-0">
              Ideal untuk: UMKM & Advertiser
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {landingPagePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  pkg.isPopular
                    ? "z-10 scale-100 bg-blue-950 text-white shadow-2xl md:scale-105"
                    : "border border-gray-100 bg-white text-slate-900 shadow-sm hover:shadow-xl"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 rounded-tr-3xl rounded-bl-xl bg-blue-600 px-4 py-1.5 text-xs font-bold tracking-wider text-white">
                    {pkg.badgeText}
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`mb-2 text-lg font-semibold ${pkg.isPopular ? "text-blue-200" : "text-gray-900"}`}
                  >
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold tracking-tight">
                    {pkg.price}
                  </div>
                </div>

                <ul className="mb-8 flex-grow space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${pkg.isPopular ? "text-blue-400" : "text-blue-600"}`}
                      />
                      <span
                        className={
                          pkg.isPopular ? "text-gray-200" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={pkg.linkCta} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`mt-auto w-full transform rounded-xl py-3.5 text-sm font-bold transition-all hover:scale-105 ${
                      pkg.isPopular
                        ? "bg-white text-blue-950 hover:bg-gray-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Pesan
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Divider */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white py-8 shadow-sm md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-6 text-center">
                <div className="mb-1 text-3xl font-extrabold text-blue-950">
                  500+
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:text-xs">
                  Proyek Selesai
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="mb-1 text-3xl font-extrabold text-blue-950">
                  98%
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:text-xs">
                  Kepuasan Klien
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="mb-1 text-3xl font-extrabold text-blue-950">
                  24/7
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:text-xs">
                  Dukungan Teknis
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="mb-1 text-3xl font-extrabold text-blue-950">
                  3x
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:text-xs">
                  ROI Meningkat
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing: Company Profile */}
        <section
          id="company-profile"
          className="mx-auto max-w-7xl px-4 py-12 pb-24 sm:px-6 lg:px-8"
        >
          <div className="mb-10 flex flex-col border-l-4 border-blue-900 pl-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-1 text-2xl font-bold text-blue-950">
                Company Profile
              </h2>
              <p className="text-sm text-gray-600">
                Fokus: Kredibilitas, Trust, & Portofolio Bisnis
              </p>
            </div>
            <div className="mt-4 text-sm font-medium text-gray-500 md:mt-0">
              Ideal untuk: Startup & Korporat
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {companyProfilePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  pkg.isPopular
                    ? "z-10 scale-100 bg-blue-950 text-white shadow-2xl md:scale-105"
                    : "border border-gray-100 bg-white text-slate-900 shadow-sm hover:shadow-xl"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 rounded-tr-3xl rounded-bl-xl bg-blue-600 px-4 py-1.5 text-xs font-bold tracking-wider text-white">
                    {pkg.badgeText}
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`mb-2 text-lg font-semibold ${pkg.isPopular ? "text-blue-200" : "text-gray-900"}`}
                  >
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold tracking-tight">
                    {pkg.price}
                  </div>
                </div>

                <ul className="mb-8 flex-grow space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${pkg.isPopular ? "text-blue-400" : "text-blue-600"}`}
                      />
                      <span
                        className={
                          pkg.isPopular ? "text-gray-200" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={pkg.linkCta} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`mt-auto w-full transform rounded-xl py-3.5 text-sm font-bold transition-all hover:scale-105 ${
                      pkg.isPopular
                        ? "bg-white text-blue-950 hover:bg-gray-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Pesan
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <FloatingWa />
      </div>
    </>
  );
}

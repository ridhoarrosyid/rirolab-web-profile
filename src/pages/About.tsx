import { ShieldCheck, Settings, TrendingUp, Users } from "lucide-react";
import FloatingWa from "../components/FloatingWa";
import HeroAbout from "../assets/images/hero-about.webp";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          Tentang Rirolab | Web Agency & Jasa Pembuatan Company Profile
        </title>
        <meta
          name="description"
          content="Kenali Rirolab, partner strategis dan pembuat company profile profesional di Lampung dan Jakarta untuk perusahaan B2B yang menginginkan otoritas digital."
        />
        <meta
          name="keywords"
          content="pembuat company profile lampung, jasa pembuatan company profile kontraktor, jasa redesign company profile, web agency lampung, tentang rirolab"
        />
        <meta
          property="og:title"
          content="Tentang Rirolab | Web Agency B2B Profesional"
        />
        <meta
          property="og:description"
          content="Membangun otoritas digital melalui arsitektur desain yang presisi untuk perusahaan B2B."
        />
      </Helmet>
      <div className="min-h-screen overflow-x-hidden bg-gray-50 font-sans text-slate-900">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl bg-white px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="animate-in fade-in slide-in-from-left-8 space-y-6 duration-700">
              <h3 className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                Manifesto Kami
              </h3>
              <h1 className="text-4xl leading-tight font-extrabold text-blue-950 lg:text-5xl">
                Tentang Rirolab
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                Membangun otoritas digital melalui arsitektur desain yang
                presisi. Kami adalah partner strategis bagi perusahaan B2B yang
                menginginkan kehadiran online yang profesional dan berwibawa.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-right-8 relative delay-150 duration-700">
              <div className="group aspect-[16/9] overflow-hidden rounded-2xl bg-gray-200 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
                <img
                  src={HeroAbout}
                  alt="Office Interior"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dedication Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="mb-6 text-3xl leading-tight font-bold text-blue-950 lg:text-4xl">
                  Dedikasi Pada Wajah Digital Profesional
                </h2>
                <div className="h-1 w-16 rounded-full bg-blue-900"></div>
              </div>
              <div className="space-y-6 leading-relaxed text-gray-600">
                <p className="text-lg font-medium text-gray-900">
                  Rirolab lahir dari kebutuhan akan standar estetika yang lebih
                  tinggi dalam ekosistem B2B.
                </p>
                <p>
                  Kami percaya bahwa situs web bukan sekadar brosur digital,
                  melainkan fondasi dari kepercayaan klien. Di Rirolab, setiap
                  piksel diatur untuk mencerminkan integritas, keandalan, dan
                  keunggulan teknis dari bisnis Anda.
                </p>
                <p>
                  Fokus kami adalah menghilangkan "kebisingan" visual dan
                  menggantinya dengan kejernihan fungsional yang mengkonversi
                  pengunjung menjadi mitra jangka panjang.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-blue-950">
                Nilai-Nilai Utama
              </h2>
              <p className="text-gray-600">
                Prinsip yang menggerakkan setiap baris kode dan elemen desain
                kami.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Value 1 */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Profesionalisme
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Identitas korporat yang bersih, terstruktur, dan memancarkan
                  standar industri global.
                </p>
              </div>

              {/* Value 2 */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Settings size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Reliabilitas
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Sistem yang tangguh dengan uptime ideal dan performa loading
                  yang tanpa cela.
                </p>
              </div>

              {/* Value 3 */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <TrendingUp size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Konversi Tinggi
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  UI/UX B2B yang dirancang khusus untuk memandu prospek menuju
                  keputusan bisnis.
                </p>
              </div>

              {/* Value 4 */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Users size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Tim Ahli
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Didukung oleh spesialis desain dan pengembang dengan
                  pengalaman bertahun-tahun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="mb-4 text-3xl font-bold text-blue-950">
                Alur Kerja Kami
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Proses terstruktur untuk memastikan hasil yang berkualitas
                tinggi dan sesuai ekspektasi.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 right-[5%] left-[5%] z-0 hidden h-0.5 bg-gray-200 lg:block"></div>

              <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7 lg:gap-4">
                {[
                  {
                    step: "1",
                    title: "Briefing & Konsultasi",
                    desc: "Memahami visi dan kebutuhan bisnis Anda secara mendalam.",
                  },
                  {
                    step: "2",
                    title: "Proposal & Dealing",
                    desc: "Penawaran rencana kerja, estimasi waktu, dan penentuan harga.",
                  },
                  {
                    step: "3",
                    title: "Down Payment",
                    desc: "Komitmen awal untuk memulai proses pengerjaan proyek.",
                  },
                  {
                    step: "4",
                    title: "Pengerjaan",
                    desc: "Proses desain dan pengembangan website dieksekusi.",
                  },
                  {
                    step: "5",
                    title: "Review & Revisi",
                    desc: "Evaluasi putaran pertama dan penyelesaian revisi dari Anda.",
                  },
                  {
                    step: "6",
                    title: "Pelunasan",
                    desc: "Pembayaran sisa nilai proyek secara keseluruhan.",
                  },
                  {
                    step: "7",
                    title: "Serah Terima",
                    desc: "Penyerahan seluruh aset digital dan panduan pengelolaan.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                      {item.step}
                    </div>
                    <h4 className="mb-2 text-sm font-bold text-gray-900 lg:text-base">
                      {item.title}
                    </h4>
                    <p className="px-2 text-xs leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 divide-y divide-gray-100 border-y border-gray-100 bg-white md:grid-cols-3 md:divide-x md:divide-y-0 lg:rounded-2xl lg:border lg:shadow-sm">
              <div className="p-10 text-center transition-colors hover:bg-gray-50">
                <div className="mb-2 text-5xl font-extrabold text-blue-950">
                  50+
                </div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Proyek Selesai
                </div>
              </div>
              <div className="p-10 text-center transition-colors hover:bg-gray-50">
                <div className="mb-2 text-5xl font-extrabold text-blue-950">
                  98%
                </div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Kepuasan Klien
                </div>
              </div>
              <div className="p-10 text-center transition-colors hover:bg-gray-50">
                <div className="mb-2 text-5xl font-extrabold text-blue-950">
                  24/7
                </div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Dukungan Teknis
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <FloatingWa />
      </div>
    </>
  );
}

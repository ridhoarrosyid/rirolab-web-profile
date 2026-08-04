import React, { useEffect, useState } from "react";
import {
  Zap,
  Settings,
  CheckCircle2,
  Plus,
  Minus,
  Star,
  Clock,
} from "lucide-react";
import { landingPageConversion } from "../utils/analytics";
import putriCandiDesktop from "../assets/images/putri-candi.webp";
import crumbsLandingPage from "../assets/images/crumbs.webp";
import companyWebProfile from "../assets/images/company-profile.webp";
import putteiLandingpage from "../assets/images/puttei.webp";
import WhatsApp from "../assets/icons/WhatsApp";
import { Link } from "react-router";

// --- Data Section ---

const features = [
  {
    icon: <Zap className="text-blue-950" size={28} />,
    title: "Filter Prospek",
    desc: "Menyaring pencari harga murah. Hanya calon klien dengan budget & proyek yang sesuai yang masuk ke WA Anda.",
  },
  {
    icon: <Clock className="text-blue-950" size={28} />,
    title: "Edukasi & Build Trust",
    desc: "Menampilkan portofolio, legalitas, & alur kerja secara transparan agar calon klien paham nilai & kualitas harga Anda sebelum mengontak.",
  },
  {
    icon: <Settings className="text-blue-950" size={28} />,
    title: "Performa & Speed Tinggi",
    desc: "Memastikan foto-foto portofolio proyek high-resolution milik Anda terbuka instan tanpa lemot di HP calon pembeli.",
  },
];

const lpPricing = [
  {
    name: "Basic Showcase",
    desc: "Cocok untuk profil portofolio simpel.",
    originalPrice: "Rp1.000.000",
    price: "Rp800.000",
    isPopular: false,
    features: [
      "Free Domain (.com)",
      "Hosting Shared 1 bulan",
      "Desain Responsif (Mobile/Desktop)",
      "1 Halaman Landing Page",
      "1 Email Bisnis",
      "Free SSL",
      "1x Revisi Gratis",
      "Garansi Maintenance 14 Hari",
      "Panduan Akses Website",
    ],
    cta: "Ambil Paket Starter",
  },
  {
    name: "Leads Converter & Filter",
    desc: "Paket lengkap edukasi + WA form interaktif untuk filter leads.",
    originalPrice: "Rp2.500.000",
    price: "Rp1.900.000",
    isPopular: true,
    badgeText: "PALING POPULER",
    features: [
      "Semua yang ada di Starter",
      "Hosting 1 Tahun",
      "Desain Visual Lebih Kompleks (CTA, Form, Event)",
      "Direct WhatsApp Chat",
      "2 Email Bisnis",
      "Free SSL",
      "3x Revisi Gratis",
      "SEO On-Page Basic",
      "Garansi Maintenance 1 Bulan",
    ],
    cta: "Klaim Promo Ini",
  },
  {
    name: "Custom Company Profile & Funnel",
    desc: "Untuk skala kontraktor/PT dengan kebutuhan multi-page & animasi parallax.",
    originalPrice: "Rp3.000.000",
    price: "Rp2.400.000",
    isPopular: false,
    features: [
      "Semua yang ada di Business",
      "Up to 3 Halaman Tambahan (About, FAQ, Blog Preview, dll)",
      "Request Fitur Khusus (Popup, Animation, Pricing Table)",
      "Desain Kompleks (Unlimited Scroll, Parallax, dll)",
      "Speed Optimization (Lazy Load + Caching Tools)",
      "5x Revisi Gratis",
      "3 Email Bisnis",
      "Garansi Maintenance 1.5 Bulan",
    ],
    cta: "Mulai Proyek Custom",
  },
];

const faqs = [
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Untuk paket Starter rata-rata 2-3 hari kerja, sedangkan paket Business sekitar 5-7 hari kerja tergantung antrean dan kelengkapan data.",
  },
  {
    q: "Apakah sudah termasuk domain dan hosting?",
    a: "Ya, semua paket sudah termasuk Domain .com dan Hosting di tahun pertama pengerjaan.",
  },
  {
    q: "Bisakah saya mengubah desain setelah jadi?",
    a: "Tentu, kami menyediakan kuota revisi sesuai paket yang dipilih. Untuk perubahan mayor setelah serah terima akan dikenakan biaya maintenance.",
  },
  {
    q: "Apakah landing page bisa diakses di HP?",
    a: "Wajib. Semua landing page buatan Damarian Biznis menggunakan pendekatan Mobile-First agar tampil sempurna di smartphone maupun desktop.",
  },
];

const portfolio = [
  {
    image: putriCandiDesktop,
    caption: "PO Putri Candi - Transportasi",
    link: "https://putricandigroup.web.id/",
  },
  {
    image: putteiLandingpage,
    caption: "Puttei - Oleh-Oleh",
    link: "http://puttei.damarianoleholeh.com/",
  },
  {
    image: crumbsLandingPage,
    caption: "Crumbs Official - F&B Bisnis",
    link: "https://crumbs-coffee-gen-z-t1s4.bolt.host",
  },
  {
    image: companyWebProfile,
    caption: "Sinergi Konstruksi - Company Profile",
    link: "#",
  },
];

const testimonials = [
  {
    star: 5,
    name: "Budi Santoso",
    testi:
      "Sebelum pakai landing page ini, iklan Meta Ads kami sebetulnya banjir chat, tapi 80% isinya 'sampah'—cuma nanya pricelist termurah terus hilang. Setelah dibuatkan landing page dengan sistem filter edukasi dari Damarian Bisnis, yang masuk ke WA sekarang calon klien yang memang paham kualitas dan punya budget proyek yang sesuai.",
    occupation: "Lead Designer",
  },
  {
    star: 5,
    name: "Santi Putri",
    testi:
      "Proyek konstruksi itu kan bernilai puluhan hingga ratusan juta, jadi calon klien butuh trust tinggi sebelum mau diajak survey lokasi. Tampilan landing page barunya kelihatan sangat profesional dan portofolio kami tersusun rapi. Bikin prospek makin yakin sebelum bahkan sempat ngobrol di WA.",
    occupation: "Kontraktor & Renovasi",
  },
  {
    star: 5,
    name: "Andi Nugraha",
    testi:
      "Proses pengerjaannya cepat dan timnya benar-benar paham alur bisnis jasa interior. Sekarang kami enggak perlu capek-capek jelaskan alur kerja dari nol di chat WA, karena calon klien sudah teredukasi duluan lewat landing page. Conversion rate dari chat ke deal naik signifikan!",
    occupation: "Principal Interior Architect",
  },
];

export default function LandingPageService() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWA = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pkgName?: string,
    price?: string,
  ) => {
    const msg = `Halo Kak, saya tertarik dengan paket Landing Page ${pkgName && price ? `- ${pkgName} (${price})` : ""}. Bisa bantu jelaskan detailnya?`;
    const url = `https://wa.me/6285183303954?text=${encodeURIComponent(msg)}`;
    landingPageConversion(e as never, url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 items-center lg:grid-cols-5 lg:gap-12">
          <div className="animate-in fade-in slide-in-from-left-8 space-y-6 duration-700 md:space-y-8 lg:col-span-3">
            <h1 className="text-3xl leading-tight font-extrabold text-blue-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Landing Page Khusus Bisnis Konstruksi & Desain Interior.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Capek Iklan Jalan Tapi Chat WA Cuma Nanya Harga Lalu Ghosting?
              Kami Buatkan Landing Page yang Menyaring & Mengedukasi Calon Klien
              Mentah Jadi Leads High-Quality Siap Deal.
            </p>
            <div className="flex flex-col flex-wrap gap-4 pt-2 sm:flex-row">
              <a
                href="#"
                onClick={(e) => handleWA(e as never)}
                className="flex w-full transform items-center justify-center gap-2 rounded-full bg-blue-900 px-7 py-4 font-medium text-white shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1 hover:bg-blue-950 sm:w-auto md:py-3.5"
              >
                <WhatsApp className="size-6" /> Konsultasi Gratis Sekarang
              </a>
              <a
                href="#portfolio"
                className="flex w-full transform items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 font-medium text-blue-950 transition-all hover:-translate-y-1 hover:bg-gray-50 sm:w-auto md:py-3.5"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
          <div className="group perspective relative col-span-2 mt-8 lg:mt-0">
            <div className="absolute -inset-1 rounded-2xl bg-blue-600/10 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                loading="eager"
                src={putriCandiDesktop}
                className="h-auto w-full object-cover"
                alt="Gambar Landing Page Putri Candi"
              />
              {/* Trust Badge overlay */}
              <div className="absolute right-3 -bottom-3 animate-bounce rounded-2xl bg-white p-3 shadow-xl md:p-4">
                <div className="text-xl font-black text-blue-950 md:text-2xl">
                  99.9%
                </div>
                <div className="text-[8px] font-bold tracking-widest text-gray-500 uppercase md:text-[10px]">
                  Uptime & Performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem/Value Proposition */}
      <section className="bg-[#F8F9FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto mb-12 max-w-3xl text-center text-xl leading-relaxed font-bold text-gray-900 sm:text-2xl md:mb-16 md:text-3xl">
            Mengapa Landing Page Konvensional Bikin Iklan Anda Rugi?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[2rem] border border-l-[3px] border-gray-100 border-l-blue-950 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-12"
              >
                <div className="mb-6 inline-block">{f.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {f.desc}
                </p>
              </div>
            ))}
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
              Proses terstruktur untuk memastikan hasil yang berkualitas tinggi
              dan sesuai ekspektasi.
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

      {/* 3. Pricing Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-blue-950 sm:text-3xl md:text-4xl">
            Pilih Paket Landing Page Anda
          </h2>
          {/* Badge Sisa Kuota Promo */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-md md:mt-12 md:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
            Sisa kuota promo bulan ini: 5 slot
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-3">
          {lpPricing.map((pkg, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-[30px] p-8 transition-all duration-300 md:rounded-[40px] md:p-10 ${pkg.isPopular ? "z-10 scale-100 bg-blue-950 text-white shadow-2xl md:scale-105" : "border border-gray-100 bg-white shadow-sm"}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E26E59] px-4 py-1.5 text-[9px] font-black tracking-widest whitespace-nowrap text-white shadow-lg md:px-6 md:py-2 md:text-[10px]">
                  {pkg.badgeText}
                </div>
              )}

              <div className="mb-8 text-center md:mb-10 md:text-left">
                <h3 className="mb-2 text-base font-bold tracking-wide md:mb-2 md:text-lg">
                  {pkg.name}
                </h3>
                {pkg.originalPrice && (
                  <div
                    className={`mb-1 text-xs font-semibold line-through md:text-sm ${pkg.isPopular ? "text-blue-300/70" : "text-gray-400"}`}
                  >
                    {pkg.originalPrice}
                  </div>
                )}
                <div className="text-3xl font-black sm:text-4xl lg:text-5xl">
                  {pkg.price}
                </div>
                {pkg.desc && (
                  <p className="mt-5 text-sm text-slate-400">{pkg.desc}</p>
                )}
              </div>

              <ul className="mb-10 flex-grow space-y-3 md:space-y-4">
                {pkg.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-xs md:items-center md:text-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className={`mt-0.5 shrink-0 md:mt-0 ${pkg.isPopular ? "text-blue-400" : "text-blue-800"}`}
                    />
                    <span
                      className={
                        pkg.isPopular ? "text-gray-200" : "text-gray-700"
                      }
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                onClick={(e) => handleWA(e as never, pkg.name, pkg.price)}
                className={`block transform rounded-2xl py-4 text-center text-sm font-bold shadow-md transition-all hover:scale-[1.02] ${
                  pkg.isPopular
                    ? "bg-orange-500 text-white shadow-orange-500/30 hover:bg-orange-600"
                    : "bg-blue-950 text-white shadow-blue-950/20 hover:bg-blue-900"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-gray-400 italic lg:text-sm">
          *harga menyesuaikan kebutuhan
        </p>
      </section>

      {/* 4. Portfolio Mini */}
      <section
        id="portfolio"
        className="overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-blue-950 md:mb-12 md:text-3xl">
            Lebih Dari Sekadar Janji. Ini Buktinya.
          </h2>

          <div className="relative">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden">
              {portfolio.map((e, i) => (
                <Link
                  to={e.link}
                  target="blank"
                  key={i}
                  className="group relative flex w-[85%] flex-none cursor-pointer snap-center flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:w-[calc(50%-12px)] md:snap-start"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      loading="lazy"
                      src={e.image}
                      alt={e.caption}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-950/0 transition-colors duration-300 group-hover:bg-blue-950/10"></div>
                  </div>
                  <div className="border-t border-gray-50 bg-white p-3 md:p-4">
                    <h3 className="text-center text-sm font-bold text-blue-950 transition-colors group-hover:text-blue-700 md:text-lg">
                      {e.caption}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-2 flex justify-center">
              <span className="flex animate-pulse items-center gap-2 text-xs font-medium text-gray-400 md:text-sm">
                &larr; Geser untuk melihat lebih banyak &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Diubah menjadi flex slider untuk mobile agar tidak memakan banyak ruang vertikal */}
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex w-[85%] flex-none snap-center flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:w-[450px] md:snap-start md:p-8 lg:w-[500px]"
                >
                  <div className="mb-4 flex gap-1 text-yellow-400">
                    {[...Array(t.star)].map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className="md:h-4 md:w-4"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mb-6 flex-grow text-sm text-gray-600 italic md:mb-8 md:text-base">
                    "{t.testi}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-black text-blue-800 shadow-inner md:h-12 md:w-12 md:text-lg">
                      {t.name.charAt(0)}
                    </div> */}
                    <div>
                      <h4 className="text-sm font-bold text-blue-950 md:text-base">
                        {t.name}
                      </h4>
                      {/* <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase md:text-xs">
                        {t.occupation}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h2 className="mb-8 text-center text-2xl font-bold text-blue-950 md:mb-12 md:text-3xl">
          Tanya Jawab
        </h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] transition-all duration-300 hover:shadow-md md:rounded-2xl"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:text-blue-600 focus:outline-none md:px-6 md:py-5"
              >
                <span className="pr-4 text-sm font-bold text-blue-950 md:text-base">
                  {faq.q}
                </span>
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-8 md:w-8 ${openFaq === i ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}
                >
                  {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              {openFaq === i && (
                <div className="animate-in fade-in slide-in-from-top-2 px-5 pb-5 text-xs leading-relaxed text-gray-500 duration-300 md:px-6 md:pb-6 md:text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="mb-10 px-4 py-10 md:mb-20 md:py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] bg-blue-950 p-8 text-center shadow-2xl md:rounded-[50px] md:p-12">
          <div className="absolute top-0 right-0 bg-blue-600 p-20 opacity-20 blur-[120px]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mb-6 text-2xl leading-tight font-bold text-white sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
              Jangan biarkan kompetitor selangkah lebih maju.{" "}
              <span className="mt-2 block text-blue-300 sm:mt-0 sm:inline">
                Klaim 1 dari 5{" "}
              </span>
              slot promo bulan ini!
            </h2>
            <a
              href="#"
              onClick={(e) => handleWA(e as never)}
              className="inline-flex w-full transform items-center justify-center gap-3 rounded-full bg-[#25d366] px-6 py-4 text-base font-extrabold text-white shadow-xl transition-all hover:scale-105 hover:bg-green-500 sm:w-auto md:px-10 md:py-5 md:text-lg"
            >
              <WhatsApp className="size-5 md:size-6" /> Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <a
        href="#"
        target="_blank"
        onClick={(e) => handleWA(e as never)}
        rel="noopener noreferrer"
        className="animate-bounce-slow fixed right-6 bottom-6 z-50 flex items-center justify-center rounded-full bg-[#25d366] p-4 text-white shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:bg-green-500"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp className="size-8" />
      </a>
    </div>
  );
}

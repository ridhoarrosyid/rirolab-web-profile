import React from "react";

// Deklarasikan tipe global gtag agar TypeScript mengenali window.gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fungsi untuk melacak konversi Google Ads dan mengarahkan ke WhatsApp
 * @param e - Event klik dari React
 * @param url - Link tujuan WhatsApp
 */
export const trackWAConversion = (
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
  url: string,
) => {
  e.preventDefault(); // Mencegah pindah halaman langsung sebelum tracking selesai

  // Fungsi internal untuk eksekusi buka tab baru (termasuk handle popup blocker)
  const executeRedirect = () => {
    const newWindow = window.open(url, "_blank");
    // Jika browser memblokir popup tab baru, gunakan fallback ganti halaman langsung
    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === "undefined"
    ) {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && window.gtag) {
    let isRedirected = false;

    // Callback yang akan dipanggil oleh Google setelah event berhasil dicatat
    const callback = () => {
      if (!isRedirected) {
        isRedirected = true;
        executeRedirect();
      }
    };

    // Kirim event konversi ke Google Ads
    window.gtag("event", "conversion", {
      send_to: "AW-16812755428/dia4CPv_mZwcEOST-dA-",
      event_callback: callback,
    });

    // Fallback darurat: Jika script Google gagal/lambat (lebih dari 1 detik), paksa buka WA
    setTimeout(() => {
      if (!isRedirected) {
        isRedirected = true;
        executeRedirect();
      }
    }, 2000);
  } else {
    // Jika gtag tidak ditemukan (misal pengguna pakai AdBlocker), langsung buka WA
    executeRedirect();
  }
};

export const landingPageConversion = (
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
  url: string,
) => {
  e.preventDefault(); // Mencegah pindah halaman langsung sebelum tracking selesai

  // Fungsi internal untuk eksekusi buka tab baru (termasuk handle popup blocker)
  const executeRedirect = () => {
    const newWindow = window.open(url, "_blank");
    // Jika browser memblokir popup tab baru, gunakan fallback ganti halaman langsung
    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === "undefined"
    ) {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && window.gtag) {
    let isRedirected = false;

    // Callback yang akan dipanggil oleh Google setelah event berhasil dicatat
    const callback = () => {
      if (!isRedirected) {
        isRedirected = true;
        executeRedirect();
      }
    };

    // Kirim event konversi ke Google Ads
    window.gtag("event", "conversion", {
      send_to: "AW-16812755428/rhKBCKyQvqMcEOST-dA-",
      value: 1.0,
      currency: "IDR",
      event_callback: callback,
    });

    // Fallback darurat: Jika script Google gagal/lambat (lebih dari 1 detik), paksa buka WA
    setTimeout(() => {
      if (!isRedirected) {
        isRedirected = true;
        executeRedirect();
      }
    }, 2000);
  } else {
    // Jika gtag tidak ditemukan (misal pengguna pakai AdBlocker), langsung buka WA
    executeRedirect();
  }
};

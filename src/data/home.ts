import { media } from "@/data/media";

export const homeContent = {
  hero: {
    subtitle: "Sarapan",
    title: "Selamat Datang di CafeId",
    text: "Kopi hangat, sarapan segar, dan hidangan penutup yang dibuat dari bahan pilihan setiap pagi.",
    action: { href: "/reservasi", label: "Reservasi" },
    video: {
      src: "https://www.youtube.com/embed/vP7X4HcDTwk",
      title: "Video profil CafeId",
    },
    slides: [
      media.heroRuang,
      media.heroBarista,
      media.heroSarapan,
    ],
  },
  offer: {
    eyebrow: "promo sarapan",
    title: "Sarapan Gratis!",
    subtitle: "Setiap sarapan ke-5 gratis untuk Anda.",
    action: { href: "/menu", label: "Lihat menu sarapan" },
    image: media.offerSarapan,
  },
  menu: {
    subtitle: "menu kami",
    title: "Menu Spesial",
    text: "Pilihan hidangan yang berganti mengikuti musim dan bahan terbaik hari ini.",
    defaultCategory: "sarapan",
  },
  privateDining: {
    subtitle: "selamat datang",
    title: "Makan Pribadi di CafeId",
    text: "Rayakan momen spesial di ruang yang tenang dengan menu yang disesuaikan untuk tamu Anda. Cocok untuk ulang tahun, arisan, dan pertemuan keluarga.",
    action: { href: "/reservasi", label: "Buat reservasi" },
  },
  presentation: {
    subtitle: "dibuat dengan cinta",
    title: "Hidangan Penutup & Minuman Baru",
  },
  testimonials: {
    title: "Kata Mereka Tentang Kami",
    image: media.testimoniTeman,
    items: [
      {
        name: "Rina Kartika",
        role: "Pelanggan tetap",
        quote:
          "Suasananya hangat dan kopinya selalu konsisten enak. Tempat favorit saya untuk bekerja santai di pagi hari.",
      },
      {
        name: "Budi Santoso",
        role: "Penikmat sarapan",
        quote:
          "Pelayanannya ramah dan hidangan keluar cepat. Nasi goreng kampungnya bikin saya kembali lagi.",
      },
      {
        name: "Dewi Lestari",
        role: "Penyelenggara acara",
        quote:
          "Kami merayakan ulang tahun di sini dan semuanya berjalan lancar. Sangat saya rekomendasikan.",
      },
    ],
  },
  recent: {
    subtitle: "blog kami",
    title: "Tulisan Terbaru",
    image: media.kopiTehMeja,
  },
  reservation: {
    subtitle: "hubungi kami",
    title: "Pesan Meja Anda Hari Ini",
    text: "Isi formulir reservasi dan kami akan mengonfirmasi ketersediaan meja secepatnya. Untuk rombongan besar, hubungi kami lebih awal.",
    action: { href: "/reservasi", label: "pesan meja" },
  },
} as const;

import { media } from "@/data/media";

export const siteConfig = {
  name: "CafeId",
  description:
    "CafeId: kafe dengan sarapan, kopi, dan hidangan penutup segar, tersedia juga untuk acara dan makan pribadi.",
  language: "id",
  locale: "id_ID",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const sitePages = [
  {
    path: "/",
    title: "Beranda",
    description: siteConfig.description,
    inNav: true,
    changeFrequency: "weekly",
    priority: 1,
    lastModified: "2026-11-10",
    image: media.heroRuang,
  },
  {
    path: "/tentang",
    title: "Tentang",
    description: "Cerita, misi, dan tim di balik kafe kami.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-11-10",
    image: media.ruangMakan,
  },
  {
    path: "/menu",
    title: "Menu",
    description: "Daftar menu minuman, hidangan pembuka, sarapan, dan penutup.",
    inNav: true,
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-11-10",
    image: media.nasiGoreng,
  },
  {
    path: "/layanan",
    title: "Layanan",
    description: "Layanan acara, katering, dan makan pribadi.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-11-10",
    image: media.acaraUlangTahun,
  },
  {
    path: "/tim",
    title: "Tim",
    description: "Kenali koki dan tim yang menyiapkan hidangan Anda.",
    inNav: false,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: "2026-11-10",
    image: media.timKoki,
  },
  {
    path: "/blog",
    title: "Blog",
    description: "Kabar, resep, dan cerita terbaru dari dapur kami.",
    inNav: true,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-11-10",
    image: media.kopiTehMeja,
  },
  {
    path: "/kontak",
    title: "Kontak",
    description: "Alamat, jam buka, dan formulir kontak.",
    inNav: true,
    changeFrequency: "yearly",
    priority: 0.7,
    lastModified: "2026-11-10",
    image: media.ruangMakan,
  },
  {
    path: "/reservasi",
    title: "Reservasi",
    description: "Pesan meja untuk makan di tempat atau acara khusus.",
    inNav: false,
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-11-10",
    image: media.ruangMakan,
  },
  {
    path: "/faq",
    title: "FAQ",
    description: "Jawaban atas pertanyaan umum seputar reservasi, menu, dan acara.",
    inNav: false,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: "2026-11-10",
  },
  {
    path: "/privasi",
    title: "Kebijakan Privasi",
    description: "Cara CafeId mengumpulkan, memakai, dan melindungi data pribadi Anda.",
    inNav: false,
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-11-10",
  },
  {
    path: "/syarat-ketentuan",
    title: "Syarat & Ketentuan",
    description: "Ketentuan penggunaan situs, reservasi, dan layanan CafeId.",
    inNav: false,
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-11-10",
  },
] as const;

// CONTOH: semua data di bawah ini nilai sementara. Ganti dengan data kafe sebenarnya
// (alamat, koordinat, telepon, email, jam buka, akun sosial) sebelum rilis.
// Dipakai oleh footer, halaman kontak, JSON-LD, tag geo, dan llms.txt.
export const siteContact = {
  address: "Jl. Contoh No. 1, Jakarta",
  addressParts: {
    street: "Jl. Contoh No. 1",
    locality: "Jakarta",
    region: "DKI Jakarta",
    postalCode: "10110",
    country: "ID",
  },
  geo: { lat: -6.1754, lng: 106.8272 },
  regionCode: "ID-JK",
  phones: ["+62 812-0000-0000"],
  email: "halo@example.com",
  hours: [
    {
      days: "Senin – Jumat",
      time: "08.00 – 21.00",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      days: "Sabtu",
      time: "09.00 – 16.00",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
    {
      days: "Minggu",
      time: "09.00 – 16.00",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  socials: [
    { network: "instagram", label: "Instagram", href: "https://instagram.com" },
    { network: "facebook", label: "Facebook", href: "https://facebook.com" },
    { network: "twitter", label: "X (Twitter)", href: "https://twitter.com" },
  ],
} as const;

export const siteBusiness = {
  priceRange: "Rp20.000 – Rp50.000",
  servesCuisine: ["Indonesia", "Sarapan", "Kopi", "Kue dan pastri"],
  keywords: [
    "kafe Jakarta",
    "sarapan",
    "kopi susu",
    "hidangan penutup",
    "reservasi kafe",
    "acara ulang tahun",
  ],
} as const;

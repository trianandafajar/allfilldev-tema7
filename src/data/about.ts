import type { Benefit } from "@/components/sections/benefits";
import type { CounterStat } from "@/components/sections/counter";

import { media } from "@/data/media";

export const aboutContent = {
  benefits: [
    {
      icon: "/svg/benefit01.svg",
      title: "Cerita Kami",
      text: "CafeId dimulai dari dapur kecil dengan satu keyakinan: sarapan yang baik membuat hari lebih baik.",
    },
    {
      icon: "/svg/benefit02.svg",
      title: "Misi Kami",
      text: "Menyajikan kopi, makanan, dan suasana yang hangat dengan bahan segar dari pemasok lokal.",
    },
    {
      icon: "/svg/benefit03.svg",
      title: "Menu",
      text: "Menu berganti mengikuti musim, dari sarapan ringan sampai hidangan penutup yang manis.",
    },
  ] satisfies readonly Benefit[],
  promo: {
    src: "https://www.youtube.com/embed/vP7X4HcDTwk",
    title: "Video profil CafeId",
    cover: media.temanNgopi.src,
  },
  counter: {
    subtitle: "perjalanan",
    title: "Setiap hari kami",
    titleBreak: "Jadi Lebih Baik untuk Anda",
    stats: [
      { value: 25000, label: "Hidangan Disajikan" },
      { value: 8000, label: "Pelanggan Dilayani" },
      { value: 350, label: "Acara Terselenggara" },
    ] satisfies readonly CounterStat[],
  },
  invitation: {
    subtitle: "menunggu Anda",
    title: "Datang dan",
    titleBreak: "Temukan Kafe Kami",
    text: "Mampir untuk sarapan, kopi sore, atau makan bersama keluarga. Kami siap menyambut Anda dengan hangat.",
    action: { href: "/kontak", label: "Hubungi kami" },
    image: media.ruangMakan,
  },
} as const;

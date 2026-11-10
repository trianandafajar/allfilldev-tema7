import type { Banner } from "@/components/sections/banners";
import type { MenuListCategory } from "@/components/sections/menu-list";

import { media } from "@/data/media";

export const menuPageContent = {
  heading: {
    subtitle: "menu kami",
    title: "Menu Spesial",
    text: "Semua hidangan dibuat saat dipesan dari bahan segar. Beri tahu kami jika Anda punya alergi atau pantangan.",
  },
  defaultCategory: "sarapan",
  booking: {
    subtitle: "hubungi kami",
    title: "Pesan Meja Anda Hari Ini",
    text: "Isi formulir reservasi dan kami akan mengonfirmasi ketersediaan meja secepatnya.",
    action: { href: "/reservasi", label: "pesan meja" },
  },
} as const;

export const menuListCategories: readonly MenuListCategory[] = [
  {
    id: "pembuka",
    label: "Pembuka",
    items: [
      { name: "Pâté Jamur", price: "Rp35.000", description: "jamur, roti panggang, saus bawang putih", tag: "vegan" },
      { name: "Aneka Lauk Asia", price: "Rp45.000", description: "tumisan sayur, udang, tahu, sambal" },
      { name: "Sayap Ayam Pedas", price: "Rp40.000", description: "sayap ayam, wijen, saus pedas", tag: "spicy" },
      { name: "Salad Sayur Segar", price: "Rp35.000", description: "selada, tomat, timun, saus lemon", tag: "vegan" },
      { name: "Lumpia Sayur", price: "Rp27.000", description: "wortel, kol, bihun, saus sambal" },
      { name: "Roti Telur Poached", price: "Rp36.000", description: "roti gandum, telur poached, selada" },
    ],
  },
  {
    id: "sarapan",
    label: "Sarapan",
    items: [
      { name: "Nasi Goreng Kampung", price: "Rp38.000", description: "nasi, telur, ayam suwir, acar", tag: "spicy" },
      { name: "Pancake Madu", price: "Rp34.000", description: "tepung, telur, madu, buah segar" },
      { name: "Roti Telur Orak-arik", price: "Rp34.000", description: "telur, roti panggang, selada" },
      { name: "Bubur Ayam", price: "Rp30.000", description: "bubur, ayam, kerupuk, bawang goreng" },
      { name: "Roti Panggang Alpukat", price: "Rp39.000", description: "roti gandum, alpukat, biji wijen", tag: "vegan" },
      { name: "Granola Yogurt", price: "Rp32.000", description: "granola, yogurt, madu, buah" },
    ],
  },
  {
    id: "penutup",
    label: "Penutup",
    items: [
      { name: "Kue Cokelat", price: "Rp40.000", description: "cokelat putih, susu, hitam, krim" },
      { name: "Tiramisu", price: "Rp42.000", description: "mascarpone, kopi, biskuit, kakao" },
      { name: "Cheesecake Buah", price: "Rp38.000", description: "krim keju, biskuit, buah beri" },
      { name: "Muffin Cokelat", price: "Rp24.000", description: "cokelat, telur, mentega" },
      { name: "Sorbet Buah", price: "Rp28.000", description: "buah musiman, gula tebu, mint", tag: "vegan" },
      { name: "Croissant Almond", price: "Rp29.000", description: "croissant, krim almond, gula halus" },
    ],
  },
  {
    id: "minuman",
    label: "Minuman",
    items: [
      { name: "Kopi Susu Aren", price: "Rp28.000", description: "espresso, susu, gula aren, es" },
      { name: "Teh Melati Hangat", price: "Rp22.000", description: "teh melati, madu, lemon", tag: "vegan" },
      { name: "Cafe Latte", price: "Rp30.000", description: "espresso, susu steam, latte art" },
      { name: "Es Kopi Hitam", price: "Rp25.000", description: "espresso, air, es batu", tag: "vegan" },
      { name: "Matcha Latte", price: "Rp31.000", description: "matcha, susu oat, es", tag: "vegan" },
      { name: "Wedang Jahe", price: "Rp20.000", description: "jahe, serai, gula batu", tag: "vegan" },
    ],
  },
];

export const menuBanners: readonly Banner[] = [
  {
    kind: "link",
    href: "/reservasi",
    image: media.promoPancake.src,
    eyebrow: "gratis",
    title: "Setiap Sarapan ke-5 Gratis.",
  },
  {
    kind: "link",
    href: "/menu",
    image: media.promoKopi.src,
    title: "Kopi + Roti Bakar",
    text: "Hemat sampai 35%",
  },
  { kind: "image", image: media.promoRoti.src },
  { kind: "image", image: media.promoPastri.src },
  {
    kind: "link",
    href: "/menu",
    image: media.promoRabu.src,
    title: "Rabu Manis!",
    text: "Hari penutup, porsi kedua gratis.",
  },
];

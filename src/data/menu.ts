import type { MenuCategory } from "@/components/sections/menu-tabs";

import { media } from "@/data/media";

export const menuCategories: readonly MenuCategory[] = [
  {
    id: "minuman",
    label: "Minuman",
    items: [
      { title: "Kopi Susu Aren", price: "28K", ingredients: "espresso, susu, gula aren, es", image: media.kopiSusuAren.src },
      { title: "Teh Melati Hangat", price: "22K", ingredients: "teh melati, madu, lemon", image: media.tehMelati.src },
      { title: "Cafe Latte", price: "30K", ingredients: "espresso, susu steam, latte art", image: media.cafeLatte.src },
      { title: "Es Kopi Hitam", price: "25K", ingredients: "espresso, air, es batu", image: media.esKopiHitam.src },
    ],
  },
  {
    id: "pembuka",
    label: "Pembuka",
    items: [
      { title: "Salad Sayur Segar", price: "35K", ingredients: "selada, tomat, timun, saus lemon", image: media.saladSegar.src },
      { title: "Lumpia Sayur", price: "27K", ingredients: "wortel, kol, bihun, saus sambal", image: media.lumpiaSayur.src },
      { title: "Roti Telur Poached", price: "36K", ingredients: "roti gandum, telur poached, selada", image: media.rotiTelurPoached.src },
      { title: "Aneka Lauk Asia", price: "45K", ingredients: "tumisan sayur, udang, tahu, sambal", image: media.anekaLauk.src },
    ],
  },
  {
    id: "sarapan",
    label: "Sarapan",
    items: [
      { title: "Nasi Goreng Kampung", price: "38K", ingredients: "nasi, telur, ayam suwir, acar", image: media.nasiGoreng.src },
      { title: "Pancake Madu", price: "34K", ingredients: "tepung, telur, madu, buah", image: media.pancakeMadu.src },
      { title: "Roti Telur Orak-arik", price: "34K", ingredients: "telur, roti panggang, selada", image: media.rotiTelur.src },
      { title: "Roti Panggang Alpukat", price: "39K", ingredients: "roti gandum, alpukat, biji wijen", image: media.rotiAlpukat.src },
    ],
  },
  {
    id: "penutup",
    label: "Penutup",
    items: [
      { title: "Kue Cokelat", price: "40K", ingredients: "cokelat putih, susu, hitam, krim", image: media.kueCokelat.src },
      { title: "Tiramisu", price: "42K", ingredients: "mascarpone, kopi, biskuit, kakao", image: media.tiramisu.src },
      { title: "Cheesecake Buah", price: "38K", ingredients: "krim keju, biskuit, buah beri", image: media.cheesecakeBuah.src },
      { title: "Muffin Cokelat", price: "24K", ingredients: "cokelat, telur, mentega", image: media.muffinCokelat.src },
    ],
  },
];

export const newItems = [
  { title: "Kue Cokelat Kopi", price: "40K", ingredients: "cokelat, kopi, krim", image: media.kueKopi.src },
  { title: "Tiramisu Kopi", price: "42K", ingredients: "mascarpone, espresso, biskuit, kakao", image: media.tiramisuKopi.src },
  { title: "Es Kopi Karamel", price: "32K", ingredients: "espresso, susu, sirup karamel, es", image: media.esKopiKaramel.src },
  { title: "Croissant Almond", price: "29K", ingredients: "croissant, krim almond, gula halus", image: media.croissantAlmond.src },
  { title: "Latte Art", price: "31K", ingredients: "espresso, susu, busa halus", image: media.latteArt.src },
  { title: "Pancake Buah Beri", price: "26K", ingredients: "tepung, telur, buah beri, gula halus", image: media.pancakeBeri.src },
] as const;

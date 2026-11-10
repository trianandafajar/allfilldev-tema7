import type { TeamMember } from "@/components/sections/team-list";

import { media } from "@/data/media";

const socials = [
  { network: "instagram", label: "Instagram", href: "https://instagram.com" },
  { network: "facebook", label: "Facebook", href: "https://facebook.com" },
  { network: "twitter", label: "X (Twitter)", href: "https://twitter.com" },
] as const;

export const teamHeading = {
  subtitle: "tim",
  title: "Tim Dapur dan Bar Kami",
  text: "Orang-orang di balik setiap hidangan dan cangkir kopi di CafeId. Mereka memasak dengan teliti dan melayani dengan ramah.",
} as const;

export const teamMembers: readonly TeamMember[] = [
  {
    name: "Ratna Wijaya",
    position: "Kepala Koki",
    bio: "Meracik menu sarapan dan penutup dengan bahan musiman dari pemasok lokal.",
    image: media.timKoki.src,
    socials,
  },
  {
    name: "Bagas Saputra",
    position: "Barista Utama",
    bio: "Memilih biji kopi dan menjaga rasa tiap seduhan tetap konsisten.",
    image: media.timBarista.src,
    socials,
  },
  {
    name: "Hendra Kusuma",
    position: "Koki Pastri",
    bio: "Membuat roti, kue, dan hidangan penutup segar setiap pagi.",
    image: media.timPastri.src,
    socials,
  },
  {
    name: "Sari Wulandari",
    position: "Manajer Kafe",
    bio: "Memastikan setiap tamu dilayani dengan hangat dan acara berjalan lancar.",
    image: media.timManajer.src,
    socials,
  },
  {
    name: "Dimas Pratama",
    position: "Koki Hidangan Utama",
    bio: "Menyiapkan hidangan utama dan menu spesial untuk acara pribadi.",
    image: media.timDapur.src,
    socials,
  },
  {
    name: "Laras Putri",
    position: "Pramusaji",
    bio: "Menyambut tamu, menyarankan menu, dan menjaga ruangan tetap nyaman.",
    image: media.timPramusaji.src,
    socials,
  },
];

import type { ServiceItem } from "@/components/sections/services-main";
import type { TestimonialCard } from "@/components/sections/testimonial-cards";

import { media } from "@/data/media";

export const servicesContent = {
  main: {
    subtitle: "layanan kami",
    title: "Kami Menyelenggarakan Acara",
    text: "Dari ulang tahun sampai pertemuan keluarga, tim kami menyiapkan ruang, menu, dan suasana sesuai kebutuhan acara Anda.",
    services: [
      {
        label: "01 layanan",
        title: "Pesta Perayaan",
        text: "Acara hari raya, arisan, dan syukuran dengan menu prasmanan atau set menu.",
      },
      {
        label: "02 layanan",
        title: "Dekorasi Acara",
        text: "Penataan meja, bunga, dan pencahayaan agar ruangan terasa sesuai tema Anda.",
      },
      {
        label: "03 layanan",
        title: "Ulang Tahun & Anniversary",
        text: "Paket kue, minuman, dan sudut foto untuk merayakan momen penting bersama orang terdekat.",
      },
      {
        label: "04 layanan",
        title: "Musik Akustik",
        text: "Penampilan musik akustik langsung untuk acara malam dan akhir pekan.",
      },
    ] satisfies readonly ServiceItem[],
    banner: {
      title: "Diskon 10% Menu di Hari Ulang Tahun Anda",
      image: media.acaraUlangTahun.src,
      action: { href: "/kontak", label: "Hubungi kami" },
    },
  },
  gallery: {
    subtitle: "galeri",
    title: "Momen Bahagia",
    images: [
      media.pestaAnak,
      media.keluargaMasak,
      media.acaraUlangTahun,
      media.kueUlangTahun,
      media.kueSelamat,
      media.temanNgopi,
    ],
  },
  info: {
    title:
      "Dengan layanan acara lengkap dan menu andalan, klien kami berhasil menggelar acara yang berkesan!",
  },
  testimonials: {
    subtitle: "testimoni",
    title: "Kata Mereka Tentang Kami",
    background: media.heroTestimoni.src,
    items: [
      { name: "Rina Kartika", profession: "Pemilik usaha", quote: "Acara perusahaan kami berjalan lancar. Menunya enak dan timnya sigap membantu dari awal sampai akhir." },
      { name: "Andi Prasetyo", profession: "Jurnalis", quote: "Tempatnya nyaman untuk pertemuan kecil. Kopinya konsisten dan pelayanannya ramah." },
      { name: "Maya Putri", profession: "Kreator konten", quote: "Dekorasi dan sudut fotonya rapi. Tamu-tamu saya suka sekali dengan suasananya." },
      { name: "Nadia Safitri", profession: "Blogger", quote: "Hidangan penutupnya jadi favorit semua orang di acara ulang tahun anak saya." },
      { name: "Fajar Nugroho", profession: "Fotografer", quote: "Pencahayaan alaminya bagus, cocok untuk sesi foto kecil sambil menikmati kopi." },
    ] satisfies readonly TestimonialCard[],
  },
  contacts: {
    subtitle: "hubungi kami",
    title: "Hubungi Kami untuk Membahas Acara Anda",
    text: "Ceritakan jumlah tamu, tanggal, dan tema acara. Kami akan menyiapkan penawaran yang sesuai.",
    action: { href: "/kontak", label: "Hubungi kami" },
    background: media.heroAcara.src,
  },
} as const;

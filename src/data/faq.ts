export type FaqItem = { question: string; answer: string };
export type FaqGroup = { id: string; title: string; items: readonly FaqItem[] };

export const faqIntro = {
  subtitle: "Pertanyaan umum",
  title: "Yang Sering Ditanyakan",
  text: "Jawaban singkat seputar reservasi, menu, acara, dan kunjungan ke CafeId.",
};

export const faqCta = {
  subtitle: "Belum menemukan jawabannya?",
  title: "Tanyakan Langsung kepada Kami",
  text: "Tim kami dengan senang hati membantu lewat formulir kontak atau telepon.",
  action: { href: "/kontak", label: "Hubungi Kami" },
};

export const faqGroups: readonly FaqGroup[] = [
  {
    id: "reservasi",
    title: "Reservasi",
    items: [
      {
        question: "Bagaimana cara memesan meja?",
        answer:
          "Isi formulir di halaman Reservasi: nama, kontak, tanggal, jam, dan jumlah tamu. Kami akan mengonfirmasi ketersediaan meja lewat email.",
      },
      {
        question: "Apakah reservasi wajib?",
        answer:
          "Tidak wajib untuk kunjungan biasa. Kami menyarankan reservasi untuk akhir pekan, rombongan, dan acara agar tempat Anda terjamin.",
      },
      {
        question: "Bisakah mengubah atau membatalkan reservasi?",
        answer:
          "Bisa. Hubungi kami lewat telepon atau formulir kontak sebelum jam kunjungan, sehingga meja dapat kami berikan kepada tamu lain.",
      },
    ],
  },
  {
    id: "menu",
    title: "Menu dan alergi",
    items: [
      {
        question: "Apakah tersedia menu vegan atau pedas?",
        answer:
          "Ya. Menu kami diberi tanda untuk hidangan pedas dan vegan, sehingga mudah dikenali di halaman Menu.",
      },
      {
        question: "Bagaimana jika saya punya alergi makanan?",
        answer:
          "Beri tahu kami saat memesan atau tuliskan di catatan reservasi. Kami akan membantu memilih hidangan yang sesuai, tetapi dapur kami mengolah beberapa bahan alergen sehingga tidak dapat menjamin bebas kontak silang.",
      },
      {
        question: "Apakah menu berubah?",
        answer:
          "Beberapa hidangan mengikuti bahan musiman. Kabar menu terbaru kami tulis di blog dan media sosial.",
      },
    ],
  },
  {
    id: "acara",
    title: "Acara dan katering",
    items: [
      {
        question: "Apakah CafeId menerima acara pribadi?",
        answer:
          "Ya, mulai dari ulang tahun, arisan, hingga pertemuan kecil. Lihat halaman Layanan untuk pilihan acara, lalu hubungi kami untuk menyesuaikan menu dan ruang.",
      },
      {
        question: "Berapa lama sebelumnya harus memesan acara?",
        answer:
          "Sebaiknya beberapa hari sebelumnya, atau lebih awal untuk acara besar. Semakin awal, semakin leluasa kami menyiapkan menu dan tempat.",
      },
    ],
  },
  {
    id: "kunjungan",
    title: "Kunjungan",
    items: [
      {
        question: "Di mana lokasi dan kapan jam buka CafeId?",
        answer:
          "Jam buka dan alamat lengkap ada di halaman Kontak dan di bagian bawah setiap halaman.",
      },
      {
        question: "Metode pembayaran apa yang diterima?",
        answer:
          "Silakan tanyakan kepada tim kami di kafe atau lewat halaman Kontak untuk metode pembayaran yang tersedia saat ini.",
      },
    ],
  },
];

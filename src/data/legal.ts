import { siteConfig, siteContact } from "@/config/site";

export type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export type LegalDoc = {
  intro: string;
  updated: string;
  updatedIso: string;
  sections: readonly LegalSection[];
};

const contactLine = `Hubungi kami di ${siteContact.email} atau ${siteContact.phones[0]}, atau datang ke ${siteContact.address}.`;

export const privacyPolicy: LegalDoc = {
  intro: `Kebijakan ini menjelaskan bagaimana ${siteConfig.name} mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat memakai situs ini, sejalan dengan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.`,
  updated: "10 November 2026",
  updatedIso: "2026-11-10",
  sections: [
    {
      heading: "Data yang kami kumpulkan",
      paragraphs: [
        "Kami hanya mengumpulkan data yang Anda berikan sendiri melalui formulir di situs:",
      ],
      items: [
        "Nama, alamat email, dan nomor telepon.",
        "Detail reservasi: tanggal, jam, jumlah tamu, dan catatan Anda.",
        "Isi pesan yang Anda kirim lewat formulir kontak.",
      ],
    },
    {
      heading: "Cara kami menggunakan data",
      items: [
        "Memproses dan mengonfirmasi reservasi.",
        "Menjawab pertanyaan dan pesan Anda.",
        "Menyiapkan layanan, misalnya mempertimbangkan catatan alergi.",
        "Memenuhi kewajiban hukum yang berlaku.",
      ],
    },
    {
      heading: "Pembagian data",
      paragraphs: [
        "Kami tidak menjual data pribadi Anda. Data hanya dibagikan kepada penyedia layanan yang membantu operasional kami (misalnya layanan email) dan hanya sebatas yang diperlukan, atau jika diwajibkan oleh hukum.",
      ],
    },
    {
      heading: "Penyimpanan dan keamanan",
      paragraphs: [
        "Data disimpan selama diperlukan untuk tujuan di atas, lalu dihapus atau dianonimkan. Kami menerapkan langkah wajar untuk menjaga keamanan data, tetapi tidak ada sistem yang sepenuhnya bebas risiko.",
      ],
    },
    {
      heading: "Hak Anda",
      paragraphs: ["Anda berhak untuk:"],
      items: [
        "Meminta akses dan salinan data pribadi Anda.",
        "Meminta perbaikan data yang tidak akurat.",
        "Meminta penghapusan data atau menarik persetujuan pemrosesan.",
        "Mengajukan keberatan atas pemrosesan tertentu.",
      ],
    },
    {
      heading: "Cookie",
      paragraphs: [
        "Situs ini tidak memasang cookie pelacak atau iklan. Peramban Anda dapat menyimpan data teknis yang diperlukan agar situs berfungsi.",
      ],
    },
    {
      heading: "Anak-anak",
      paragraphs: [
        "Situs ini tidak ditujukan bagi anak di bawah 18 tahun. Reservasi oleh anak sebaiknya dilakukan oleh orang tua atau wali.",
      ],
    },
    {
      heading: "Perubahan kebijakan",
      paragraphs: [
        "Kebijakan dapat kami perbarui. Tanggal pembaruan terakhir tertera di bagian atas halaman ini.",
      ],
    },
    { heading: "Kontak", paragraphs: [contactLine] },
  ],
};

export const termsOfService: LegalDoc = {
  intro: `Dengan memakai situs dan layanan ${siteConfig.name}, Anda menyetujui syarat dan ketentuan berikut. Harap baca dengan saksama.`,
  updated: "10 November 2026",
  updatedIso: "2026-11-10",
  sections: [
    {
      heading: "Reservasi",
      paragraphs: [
        "Permintaan reservasi melalui situs baru berlaku setelah kami konfirmasi lewat email. Kami berhak menolak atau menjadwalkan ulang reservasi jika kapasitas tidak memungkinkan.",
      ],
    },
    {
      heading: "Keterlambatan dan pembatalan",
      paragraphs: [
        "Mohon beri kabar jika Anda terlambat atau berhalangan hadir. Meja dapat diberikan kepada tamu lain jika Anda tidak hadir dan tidak menghubungi kami dalam waktu yang wajar dari jam reservasi.",
      ],
    },
    {
      heading: "Acara pribadi",
      paragraphs: [
        "Ketentuan acara pribadi, termasuk menu, jumlah tamu, dan biaya, disepakati secara tertulis sebelum acara berlangsung.",
      ],
    },
    {
      heading: "Menu dan harga",
      paragraphs: [
        "Menu, harga, dan ketersediaan dapat berubah tanpa pemberitahuan. Gambar di situs bersifat ilustrasi. Harga tercantum dalam Rupiah.",
      ],
    },
    {
      heading: "Alergi makanan",
      paragraphs: [
        "Informasikan alergi Anda saat memesan. Dapur kami mengolah beberapa bahan alergen, sehingga kami tidak dapat menjamin hidangan bebas sepenuhnya dari kontak silang.",
      ],
    },
    {
      heading: "Perilaku pengunjung",
      paragraphs: [
        "Mohon menjaga kenyamanan pengunjung lain dan kebersihan tempat. Kami berhak meminta tamu yang mengganggu untuk meninggalkan lokasi.",
      ],
    },
    {
      heading: "Hak kekayaan intelektual",
      paragraphs: [
        `Teks, gambar, dan logo di situs ini milik ${siteConfig.name} atau pemberi lisensinya dan tidak boleh digunakan tanpa izin tertulis.`,
      ],
    },
    {
      heading: "Batasan tanggung jawab",
      paragraphs: [
        "Situs disediakan apa adanya. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs.",
      ],
    },
    {
      heading: "Hukum yang berlaku",
      paragraphs: [
        "Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diupayakan diselesaikan secara musyawarah terlebih dahulu.",
      ],
    },
    { heading: "Kontak", paragraphs: [contactLine] },
  ],
};

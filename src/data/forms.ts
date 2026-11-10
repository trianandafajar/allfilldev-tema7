export const reservationIntro = {
  title: "Pesan Meja Anda",
  text: "Isi data berikut dan kami akan mengonfirmasi reservasi lewat email.",
};

export const contactIntro = {
  title: "Kirim Pesan",
  text: "Punya pertanyaan, saran, atau rencana acara? Tulis di sini, kami balas secepatnya.",
};

export const timeOptions = Array.from({ length: 24 }, (_, i) => {
  const minutes = 9 * 60 + i * 30;
  const hh = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mm = String(minutes % 60).padStart(2, "0");
  return { value: `${hh}:${mm}`, label: `${hh}.${mm}` };
});

export const seatOptions = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} orang`,
}));

// CONTOH: ganti dengan kebijakan reservasi yang berlaku.
export const reservationAside = {
  title: "Informasi Reservasi",
  notes: [
    "Meja ditahan selama 15 menit dari jam kedatangan.",
    "Rombongan lebih dari 10 orang, hubungi kami lebih awal.",
    "Ubah atau batalkan reservasi lewat telepon sebelum jam kunjungan.",
  ],
};

export const reservationSteps = {
  subtitle: "cara memesan",
  title: "Tiga Langkah Mudah",
  items: [
    {
      title: "Isi formulir",
      text: "Tulis nama, kontak, tanggal, jam, dan jumlah tamu.",
    },
    {
      title: "Terima konfirmasi",
      text: "Kami mengonfirmasi ketersediaan meja lewat email.",
    },
    {
      title: "Datang dan nikmati",
      text: "Meja sudah siap, tinggal pilih menu favorit Anda.",
    },
  ],
};

export const reservationFaq = {
  subtitle: "pertanyaan umum",
  title: "Seputar Reservasi",
  text: "Hal yang sering ditanyakan sebelum memesan meja.",
};

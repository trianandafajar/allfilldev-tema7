import type { PostBlock } from "@/components/blog/post-article";
import { media, type Photo } from "@/data/media";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: Photo;
  tags: readonly string[];
  featured?: boolean;
  blocks: readonly PostBlock[];
};

export const posts: readonly Post[] = [
  {
    slug: "hidangan-musim-panas-dari-koki",
    title: "Hidangan Musim Panas Terbaru dari Koki Kami",
    excerpt:
      "Menu segar dengan buah dan sayur musiman untuk menemani hari-hari yang terik.",
    date: "21 April 2026",
    isoDate: "2026-04-21",
    image: media.anekaLauk,
    tags: ["Resep", "Makanan"],
    featured: true,
    blocks: [
      { type: "paragraph", text: "Saat cuaca terik, selera makan biasanya turun. Karena itu tim dapur kami menyusun menu musim panas yang ringan, berwarna, dan tetap mengenyangkan. Intinya sederhana: sayur dan buah yang sedang melimpah, bumbu yang tidak berat, dan porsi yang pas." },
      { type: "paragraph", text: "Koki kami memulai dari pasar di pagi hari. Tomat, timun, wortel, dan daun segar dipilih langsung, lalu dipotong tipis agar cepat matang dan teksturnya tetap renyah. Udang dan tahu kami tumis sebentar di api besar supaya tidak keras." },
      { type: "quote", text: "Hidangan musim panas yang baik terasa ringan di lidah, tapi tetap meninggalkan kesan.", author: "Koki CafeId" },
      { type: "gallery", images: [media.rotiTelurPoached, media.saladSegar] },
      { type: "paragraph", text: "Beberapa menu baru bisa Anda temukan di daftar Pembuka dan Sarapan. Salad segar, lumpia sayur, dan aneka lauk Asia kami sajikan bersama sambal buatan sendiri. Pesan tingkat pedasnya sesuai selera." },
      { type: "lists", lists: [["Sayur dan buah musiman", "Dimasak saat dipesan", "Sambal dibuat sendiri"], ["Pilihan tanpa daging tersedia", "Porsi bisa dibagi berdua", "Cocok untuk makan siang"]] },
      { type: "paragraph", text: "Kalau Anda datang berombongan, minta meja dekat jendela. Cahaya siang membuat warna hidangan terlihat lebih menarik, dan angin dari luar membuat suasana lebih nyaman." },
    ],
  },
  {
    slug: "kue-muffin-cokelat",
    title: "Muffin Cokelat untuk Teman Ngopi",
    excerpt:
      "Lembut di dalam, renyah di tepi. Ini cara kami membuat muffin cokelat setiap pagi.",
    date: "21 April 2026",
    isoDate: "2026-04-21",
    image: media.muffinBunga,
    tags: ["Penutup", "Resep"],
    featured: true,
    blocks: [
      { type: "paragraph", text: "Muffin cokelat adalah teman ngopi yang paling jarang mengecewakan. Pahit kopi bertemu manis cokelat, dan keduanya saling menyeimbangkan. Di CafeId, muffin dipanggang setiap pagi sebelum pintu dibuka." },
      { type: "paragraph", text: "Rahasianya ada di adonan yang tidak diaduk berlebihan. Tepung dan bahan basah cukup dicampur sampai rata. Adonan yang terlalu lama diaduk akan menghasilkan muffin yang keras dan alot." },
      { type: "paragraph", text: "Kami memakai cokelat batangan yang dicincang kasar, bukan hanya bubuk kakao. Potongan cokelat itu meleleh di dalam muffin dan memberi kejutan manis di tiap gigitan." },
      { type: "gallery", images: [media.blogMuffinKarangan, media.muffinCokelat] },
      { type: "quote", text: "Muffin yang baik masih hangat dan sedikit rapuh di bagian atasnya.", author: "Koki Pastri CafeId" },
      { type: "lists", lists: [["Panggang di suhu tinggi di awal", "Turunkan suhu agar matang merata", "Dinginkan sebentar sebelum disajikan"], ["Cocok dengan kopi hitam", "Enak dengan susu hangat", "Bisa dibawa pulang"]] },
      { type: "paragraph", text: "Datanglah di pagi hari kalau ingin mendapat muffin yang baru keluar dari oven. Jumlahnya terbatas dan biasanya habis sebelum siang." },
    ],
  },
  {
    slug: "tradisi-minum-teh",
    title: "Teh: Tradisi Minum Teh yang Menarik",
    excerpt:
      "Dari teh melati sampai teh tubruk, cerita di balik secangkir teh hangat.",
    date: "14 April 2026",
    isoDate: "2026-04-14",
    image: media.blogTeh,
    tags: ["Minuman"],
    blocks: [
      { type: "paragraph", text: "Di banyak rumah di Indonesia, teh adalah minuman pertama yang disajikan kepada tamu. Secangkir teh hangat membuka percakapan, menenangkan suasana, dan menandakan bahwa tamu diterima dengan baik." },
      { type: "paragraph", text: "Ada banyak cara menikmati teh. Teh melati yang harum cocok diminum tanpa gula. Teh tubruk yang pekat biasanya diseduh langsung di gelas dan dibiarkan mengendap. Sementara teh tarik dan teh susu lebih disukai saat ingin sesuatu yang manis dan hangat." },
      { type: "gallery", images: [media.blogTehTeko, media.tehMelati] },
      { type: "paragraph", text: "Suhu air memengaruhi rasa. Air yang terlalu panas membuat teh pahit dan sepat, terutama untuk teh melati dan teh hijau. Biarkan air yang baru mendidih berhenti bergolak sebentar sebelum dituang ke daun teh." },
      { type: "quote", text: "Teh tidak perlu terburu-buru. Tunggu sebentar, lalu nikmati perlahan.", author: "Barista CafeId" },
      { type: "lists", lists: [["Teh melati: harum dan ringan", "Teh tubruk: pekat dan hangat", "Teh susu: manis dan lembut"], ["Seduh 3 sampai 4 menit", "Gunakan air bersih", "Sajikan selagi hangat"]] },
      { type: "paragraph", text: "Di CafeId, teh disajikan dalam teko kecil agar Anda bisa menuang sendiri dan menikmatinya bersama teman. Coba teh melati hangat kami bersama sepotong kue." },
    ],
  },
  {
    slug: "rahasia-kopi-nikmat",
    title: "Rahasia Kopi yang Nikmat",
    excerpt:
      "Dari pemilihan biji sampai suhu air, hal kecil yang mengubah rasa secangkir kopi.",
    date: "26 Maret 2026",
    isoDate: "2026-03-26",
    image: media.blogBijiKopi,
    tags: ["Kopi", "Minuman"],
    blocks: [
      { type: "paragraph", text: "Kopi yang enak tidak selalu mahal, tetapi selalu dibuat dengan perhatian. Ada beberapa hal kecil yang menentukan rasa akhirnya, dan sebagian besar bisa Anda lakukan sendiri di rumah." },
      { type: "paragraph", text: "Pertama, biji kopi. Biji yang baru disangrai punya aroma yang lebih kuat. Simpan dalam wadah tertutup, jauh dari panas dan cahaya langsung, dan gunakan dalam beberapa minggu setelah dibuka." },
      { type: "gallery", images: [media.blogBijiCurah, media.cafeLatte] },
      { type: "paragraph", text: "Kedua, gilingan. Biji yang digiling sesaat sebelum diseduh menghasilkan rasa yang lebih bersih. Ukuran gilingan harus sesuai metode: halus untuk espresso, sedang untuk seduh tuang, dan kasar untuk seduh rendam." },
      { type: "paragraph", text: "Ketiga, air dan takaran. Gunakan air bersih dengan suhu sekitar 90 sampai 95 derajat Celsius. Timbang kopi dan air agar hasilnya konsisten dari hari ke hari." },
      { type: "quote", text: "Kopi yang baik tidak perlu dijelaskan. Cukup diminum perlahan.", author: "Barista CafeId" },
      { type: "lists", lists: [["Biji segar dan disimpan rapat", "Gilingan sesuai metode", "Air bersih dan suhu tepat"], ["Timbang takaran", "Catat resep favorit", "Bersihkan alat setiap hari"]] },
    ],
  },
  {
    slug: "lima-hidangan-penutup",
    title: "Lima Hidangan Penutup yang Layak Dicoba",
    excerpt:
      "Pilihan penutup favorit pelanggan, dari yang manis pekat sampai yang ringan.",
    date: "26 Maret 2026",
    isoDate: "2026-03-26",
    image: media.blogPenutup,
    tags: ["Penutup"],
    blocks: [
      { type: "paragraph", text: "Makan terasa belum selesai tanpa sesuatu yang manis di akhir. Berikut lima hidangan penutup yang paling sering dipesan pelanggan CafeId, dari yang manis pekat sampai yang ringan dan segar." },
      { type: "paragraph", text: "Pertama, tiramisu. Lapisan biskuit yang dicelup kopi, krim mascarpone yang lembut, dan taburan kakao di atasnya. Pahit dan manisnya seimbang, cocok untuk Anda yang suka kopi." },
      { type: "paragraph", text: "Kedua, kue cokelat. Teksturnya padat dan lembap, dengan rasa cokelat yang dalam. Ketiga, cheesecake buah, dengan krim keju yang asam-manis dan topping buah beri." },
      { type: "gallery", images: [media.cheesecakeBuah, media.promoRabu] },
      { type: "paragraph", text: "Keempat, muffin cokelat yang hangat dan rapuh di tepinya. Kelima, kue kopi dengan hiasan cokelat, pilihan ringan yang pas dinikmati sambil mengobrol." },
      { type: "quote", text: "Hidangan penutup adalah cara terbaik untuk memperpanjang obrolan.", author: "Koki Pastri CafeId" },
      { type: "lists", lists: [["Tiramisu", "Kue cokelat", "Cheesecake buah"], ["Muffin cokelat", "Kue kopi", "Pesan untuk dibawa pulang"]] },
    ],
  },
  {
    slug: "sarapan-sehat-setiap-hari",
    title: "Sarapan Sehat Setiap Hari",
    excerpt:
      "Ide sarapan seimbang yang cepat disiapkan dan tetap mengenyangkan.",
    date: "12 Maret 2026",
    isoDate: "2026-03-12",
    image: media.heroSarapan,
    tags: ["Sarapan", "Makanan"],
    blocks: [
      { type: "paragraph", text: "Sarapan yang seimbang membuat Anda lebih fokus di pagi hari. Tidak perlu rumit: kombinasikan karbohidrat yang mengenyangkan, protein, dan sedikit sayur atau buah." },
      { type: "paragraph", text: "Roti gandum panggang dengan alpukat dan telur adalah contoh yang mudah. Lemak baik dari alpukat dan protein dari telur membuat perut terasa kenyang lebih lama. Tambahkan irisan tomat atau selada untuk serat." },
      { type: "gallery", images: [media.rotiTelur, media.rotiAlpukat] },
      { type: "paragraph", text: "Kalau punya waktu lebih, nasi goreng dengan sayur dan telur bisa jadi pilihan. Gunakan nasi dari hari sebelumnya agar teksturnya tidak lembek, dan kurangi minyak." },
      { type: "paragraph", text: "Jangan lupa minum air putih sebelum kopi. Setelah itu, nikmati kopi atau teh Anda tanpa terburu-buru." },
      { type: "quote", text: "Pagi yang baik dimulai dari piring yang baik.", author: "Tim Dapur CafeId" },
      { type: "lists", lists: [["Roti gandum, alpukat, telur", "Nasi goreng sayur", "Pancake dengan buah"], ["Siapkan bahan semalam", "Pilih porsi yang pas", "Minum air putih dulu"]] },
    ],
  },
  {
    slug: "kopi-susu-gula-aren",
    title: "Kopi Susu Gula Aren, Racikan Andalan Kami",
    excerpt:
      "Perpaduan espresso, susu segar, dan gula aren yang jadi pesanan terbanyak di kafe.",
    date: "5 Maret 2026",
    isoDate: "2026-03-05",
    image: media.esKopiKaramel,
    tags: ["Kopi", "Minuman"],
    blocks: [
      { type: "paragraph", text: "Kopi susu gula aren adalah pesanan yang paling sering kami buat. Rasanya akrab: pahit espresso, gurih susu, dan manis gula aren yang beraroma seperti karamel." },
      { type: "paragraph", text: "Kami memulainya dengan sirup gula aren yang dimasak sendiri bersama sedikit air dan daun pandan. Sirup itu dituang ke dasar gelas, lalu diisi es batu dan susu dingin." },
      { type: "gallery", images: [media.promoKopi, media.blogEsMerah] },
      { type: "paragraph", text: "Terakhir, espresso dituang perlahan di atasnya sehingga membentuk lapisan cokelat yang cantik. Aduk sebelum diminum agar manisnya merata, atau biarkan berlapis kalau Anda suka rasa yang berubah di tiap tegukan." },
      { type: "quote", text: "Resep yang sederhana, asal takarannya tepat.", author: "Barista CafeId" },
      { type: "lists", lists: [["Espresso satu shot", "Susu segar dingin", "Sirup gula aren buatan sendiri"], ["Kurangi gula atas permintaan", "Tersedia dengan susu oat", "Bisa panas atau dingin"]] },
      { type: "paragraph", text: "Mau mencoba di rumah? Tambahkan sedikit garam pada sirup untuk rasa yang lebih dalam. Tapi kalau malas, datang saja ke kafe kami." },
    ],
  },
  {
    slug: "acara-kecil-di-kafe",
    title: "Merayakan Acara Kecil di Kafe",
    excerpt:
      "Ulang tahun, arisan, atau rapat santai: ini cara kami menyiapkan ruang dan menu.",
    date: "20 Februari 2026",
    isoDate: "2026-02-20",
    image: media.acaraUlangTahun,
    tags: ["Acara"],
    blocks: [
      { type: "paragraph", text: "Tidak semua perayaan perlu gedung besar. Ulang tahun keluarga, arisan, atau pertemuan kecil sering terasa lebih hangat di tempat yang akrab. CafeId menyediakan ruang dan menu untuk acara dengan jumlah tamu yang terbatas." },
      { type: "paragraph", text: "Prosesnya sederhana. Anda memberi tahu kami tanggal, jumlah tamu, dan tema yang diinginkan. Tim kami lalu menyiapkan penataan meja, dekorasi, dan menu yang sesuai dengan anggaran Anda." },
      { type: "gallery", images: [media.pestaAnak, media.kueUlangTahun] },
      { type: "paragraph", text: "Untuk acara ulang tahun, kami bisa membantu menyiapkan kue, minuman, dan sudut foto. Beri tahu kami jika ada tamu dengan alergi atau pantangan makanan agar bisa kami siapkan dari awal." },
      { type: "quote", text: "Acara kecil yang dipersiapkan baik sering lebih berkesan daripada pesta besar.", author: "Tim CafeId" },
      { type: "lists", lists: [["Ulang tahun dan syukuran", "Arisan dan pertemuan keluarga", "Rapat santai"], ["Dekorasi meja dan bunga", "Menu prasmanan atau set menu", "Kue sesuai pesanan"]] },
      { type: "paragraph", text: "Pesan tanggal Anda lebih awal, terutama untuk akhir pekan. Hubungi kami lewat halaman reservasi atau kontak." },
    ],
  },
];

export const allTags = [...new Set(posts.flatMap((post) => post.tags))];

export const blogQuote = {
  text: "Secangkir kopi yang baik tidak perlu dijelaskan. Cukup diminum perlahan.",
  author: "Barista CafeId",
};

export const blogBanner = {
  title: "Pesan Meja Anda",
  text: "Reservasi meja untuk sarapan, makan siang, atau acara kecil bersama keluarga.",
  cta: { href: "/reservasi", label: "Reservasi" },
};

export const POSTS_PER_PAGE = 4;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function getPostsPage(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}

export const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

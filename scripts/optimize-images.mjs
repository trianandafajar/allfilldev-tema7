// Mengubah foto di assets-src/*.jpg menjadi WebP di public/img/ memakai ffmpeg.
// Jalankan: bun scripts/optimize-images.mjs   (ffmpeg harus ada di PATH)
import { mkdir, readdir, stat } from "node:fs/promises";
import { basename, join } from "node:path";
import { spawnSync } from "node:child_process";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const src = join(root, "assets-src");
const dest = join(root, "public/img");

// Lebar maksimum menurut awalan nama; sisanya memakai DEFAULT_WIDTH.
const WIDTHS = { "hero-": 1920, "tim-": 700, "avatar-": 160 };
const DEFAULT_WIDTH = 1000;
const QUALITY = 78;
// Latar lebar tertutup overlay, jadi kualitas boleh lebih rendah.
const HERO_QUALITY = 65;

const widthFor = (name) =>
  Object.entries(WIDTHS).find(([prefix]) => name.startsWith(prefix))?.[1] ??
  DEFAULT_WIDTH;

await mkdir(dest, { recursive: true });
const files = (await readdir(src)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let before = 0;
let after = 0;
for (const file of files) {
  const name = basename(file).replace(/\.[^.]+$/, "");
  const input = join(src, file);
  const output = join(dest, `${name}.webp`);
  const result = spawnSync(
    "ffmpeg",
    [
      "-y", "-loglevel", "error", "-i", input,
      "-vf", `scale='min(${widthFor(name)},iw)':-2`,
      "-c:v", "libwebp", "-quality", String(name.startsWith("hero-") ? HERO_QUALITY : QUALITY),
      "-compression_level", "6", "-preset", "photo", output,
    ],
    { stdio: "inherit" },
  );
  if (result.status !== 0) {
    console.error(`GAGAL ${file}`);
    process.exitCode = 1;
    continue;
  }
  const a = (await stat(input)).size;
  const b = (await stat(output)).size;
  before += a;
  after += b;
  console.log(`${name.padEnd(22)} ${(a / 1024).toFixed(0).padStart(6)} KB -> ${(b / 1024).toFixed(0).padStart(5)} KB`);
}
console.log(`\nTotal ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB (${files.length} file)`);

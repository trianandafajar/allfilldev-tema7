// Mengunduh foto sumber (Pexels) ke assets-src/ sesuai scripts/photos.json.
// Jalankan: bun scripts/fetch-photos.mjs
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const out = join(root, "assets-src");
const photos = JSON.parse(
  await (await import("node:fs/promises")).readFile(join(root, "scripts/photos.json"), "utf8"),
);

await mkdir(out, { recursive: true });
let failed = 0;
for (const [name, id] of Object.entries(photos)) {
  const file = join(out, `${name}.jpg`);
  try {
    await access(file);
    continue;
  } catch {}
  const width = name.startsWith("hero-") ? 2000 : 1400;
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`GAGAL ${name} (${id}): ${res.status}`);
    failed++;
    continue;
  }
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  console.log(`ok ${name}`);
}
process.exit(failed ? 1 : 0);

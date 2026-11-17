// Scans public/logos/ and writes data/logos.json: { "<institution-slug>": "/logos/<file>" }.
// Runs automatically before `npm run dev` and `npm run build` (see package.json).
// A logo is picked up when its file name starts with the institution's slug,
// e.g. public/logos/university-of-manitoba.svg or university-of-manitoba-2027.png
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dir = path.join(root, "public", "logos");
const institutions = JSON.parse(fs.readFileSync(path.join(root, "data", "institutions.json"), "utf8"));
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /\.(svg|png|webp|jpe?g)$/i.test(f)).sort() : [];

const map = {};
for (const { slug } of institutions) {
  const match = files.filter((f) => f === slug + path.extname(f) || f.startsWith(slug + "-")).pop();
  if (match) map[slug] = `/logos/${match}`;
}
fs.writeFileSync(path.join(root, "data", "logos.json"), JSON.stringify(map, null, 2) + "\n");
console.log(`Institution logos found: ${Object.keys(map).length} of ${institutions.length}`);

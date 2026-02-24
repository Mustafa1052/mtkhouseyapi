import { readFile } from "node:fs/promises";

const paths = [
  "app/celik-konstruksiyon-evler/page.tsx",
  "app/prefabrik-evler/page.tsx",
  "app/bungalov-evler/page.tsx",
  "app/pimapen-pvc-dograma/page.tsx",
  "app/page.tsx",
  "lib/site.ts",
];

const contents = await Promise.all(paths.map((path) => readFile(path, "utf8")));
const allText = contents.join("\n");

const urls = [...new Set(allText.match(/https:\/\/images\.unsplash\.com\/[^\s"')]+/g) ?? [])];
const bad = [];

for (const url of urls) {
  try {
    const response = await fetch(url);
    if (!response.ok) bad.push({ status: response.status, url });
  } catch {
    bad.push({ status: "ERR", url });
  }
}

console.log(`total=${urls.length}`);
console.log(`bad=${bad.length}`);
for (const item of bad) {
  console.log(`${item.status} ${item.url}`);
}

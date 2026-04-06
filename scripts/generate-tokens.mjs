import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const charter = JSON.parse(readFileSync(resolve(ROOT, "src/brand/charter.json"), "utf-8"));

const cssLines = ["/* Auto-generated from charter.json — do not edit manually */", ":root {"];

for (const [key, value] of Object.entries(charter.colors)) {
  cssLines.push(`  --brand-${kebab(key)}: ${value};`);
}

for (const [role, font] of Object.entries(charter.fonts)) {
  cssLines.push(`  --brand-font-${role}: '${font.family}', ${font.fallback};`);
  cssLines.push(`  --brand-font-${role}-weight: ${font.weight};`);
}

cssLines.push("}");

const cssOut = resolve(ROOT, "src/styles/brand-tokens.css");
mkdirSync(dirname(cssOut), { recursive: true });
writeFileSync(cssOut, `${cssLines.join("\n")}\n`);

const tsLines = [
  "/* Auto-generated from charter.json — do not edit manually */",
  "",
  `export const colors = ${JSON.stringify(charter.colors, null, 2)} as const;`,
  "",
  "export const fonts = {",
];

for (const [role, font] of Object.entries(charter.fonts)) {
  const family = JSON.stringify(`'${font.family}', ${font.fallback}`);
  const weight = JSON.stringify(font.weight);
  tsLines.push(`  ${role}: { family: ${family}, weight: ${weight} },`);
}

tsLines.push("} as const;");

const tsOut = resolve(ROOT, "src/lib/tokens.ts");
mkdirSync(dirname(tsOut), { recursive: true });
writeFileSync(tsOut, `${tsLines.join("\n")}\n`);

console.log("Generated brand-tokens.css and tokens.ts");

function kebab(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || "127.0.0.1";
const url = process.env.COOKBOOK_URL || `http://${host}:${port}/cookbook/`;
const outputDir = path.resolve("dist");
const outputPath = path.join(outputDir, "cookbook.pdf");

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(url, { waitUntil: "networkidle" });
await page.pdf({
  path: outputPath,
  format: "Letter",
  printBackground: true,
  margin: {
    top: "0.5in",
    right: "0.5in",
    bottom: "0.5in",
    left: "0.5in"
  }
});

await browser.close();

console.log(`Saved ${outputPath}`);

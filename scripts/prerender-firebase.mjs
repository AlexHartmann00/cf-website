import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import worker from "../dist/server/index.js";

const outputDirectory = new URL("../firebase-dist/", import.meta.url);
const routes = ["/", "/rize", "/workouts", "/termin", "/impressum", "/datenschutz", "/datenschutz-rize"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), outputDirectory, { recursive: true });

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://cf-website-24f52.web.app${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) throw new Error(`Prerendering ${route} failed with ${response.status}`);

  const fileName = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await writeFile(new URL(fileName, outputDirectory), await response.text());
}

console.log(`Prerendered ${routes.length} routes for Firebase Hosting.`);

import { onRequest } from "firebase-functions/v2/https";
import worker from "./dist/server/index.js";

export const ssr = onRequest(
  { region: "europe-west1", memory: "512MiB", timeoutSeconds: 60 },
  async (request, response) => {
    const protocol = request.get("x-forwarded-proto") || "https";
    const host = request.get("x-forwarded-host") || request.get("host");
    const url = `${protocol}://${host}${request.originalUrl}`;
    const method = request.method || "GET";
    const headers = new Headers();

    for (const [name, value] of Object.entries(request.headers)) {
      if (Array.isArray(value)) value.forEach((item) => headers.append(name, item));
      else if (value) headers.set(name, value);
    }

    const init = { method, headers };
    if (method !== "GET" && method !== "HEAD" && request.rawBody?.length) {
      init.body = request.rawBody;
    }

    const result = await worker.fetch(
      new Request(url, init),
      { ASSETS: { fetch: () => Promise.resolve(new Response("Not found", { status: 404 })) } },
      { waitUntil() {}, passThroughOnException() {} },
    );

    response.status(result.status);
    result.headers.forEach((value, name) => response.setHeader(name, value));
    response.send(Buffer.from(await result.arrayBuffer()));
  },
);

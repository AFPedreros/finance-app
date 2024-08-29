import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", logger());

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.all("*", (c) => c.text("404: Not Found"));

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

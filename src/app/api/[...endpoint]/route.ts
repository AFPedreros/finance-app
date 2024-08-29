import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

export const OPTIONS = handle(app);
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type ApiRoutes = typeof apiRoutes;

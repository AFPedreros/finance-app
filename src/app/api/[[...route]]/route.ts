import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.get("/hello", (c) => c.json({ message: "Hello, Vercel!" }));

export const GET = handle(app);
export const POST = handle(app);

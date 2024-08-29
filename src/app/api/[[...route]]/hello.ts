import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const messageSchema = z.object({
  message: z.string().min(1),
});

export const helloRoute = new Hono().get("/", async (c) => {
  console.log("Hono API called");

  return c.json({ message: "Hello, Vercel!" });
});

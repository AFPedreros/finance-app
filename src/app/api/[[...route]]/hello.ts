import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const messageSchema = z.object({
  message: z.string().min(1),
});

export const helloRoute = new Hono().get(
  "/",
  zValidator("query", messageSchema),
  async (c) => {
    const { message } = c.req.valid("query");

    return c.json({
      message: `${message} hello from Hono!`,
    });
  },
);

import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

import { helloRoute } from "./hello";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/hello", helloRoute);

app.all("*", (c) => c.text("404: Not Found"));

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type ApiRoutes = typeof apiRoutes;

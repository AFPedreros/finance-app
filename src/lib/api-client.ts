import { hc } from "hono/client";

import { getBaseURL } from "./utils";

import { ApiRoutes } from "@/app/api/[...endpoint]/route";

const baseUrl = getBaseURL();

const client = hc<ApiRoutes>(`${baseUrl}/`);

export const api = client.api;

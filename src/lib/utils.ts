import { isServer } from "@tanstack/react-query";

export function getBaseURL() {
  if (!isServer) {
    return "";
  }

  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
}

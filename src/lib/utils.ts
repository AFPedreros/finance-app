import { isServer } from "@tanstack/react-query";

export function getBaseURL() {
  if (!isServer) {
    return "";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Fallback for local development or other environments
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
}

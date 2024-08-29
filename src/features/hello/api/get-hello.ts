import { api } from "@/lib/api-client";

export async function getHello(message: string) {
  const response = await api.hello.$get({ query: { message } });

  if (!response.ok) {
    throw new Error("Server error");
  }

  const data = await response.json();

  return data;
}

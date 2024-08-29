import { getBaseURL } from "@/lib/utils";

export async function getHello() {
  const response = await fetch(`${getBaseURL()}/api/hello`);

  if (!response.ok) {
    throw new Error("Server error");
  }

  const data = await response.json();

  return data;
}

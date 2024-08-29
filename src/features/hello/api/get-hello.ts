import { api } from "@/lib/api-client";

export async function getHello() {
  try {
    const response = await api.hello.$get();

    // eslint-disable-next-line no-console
    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    // eslint-disable-next-line no-console
    console.log("[RESPONSE]", data);

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching hello:", error);

    return { message: "Error fetching hello" };
  }
}

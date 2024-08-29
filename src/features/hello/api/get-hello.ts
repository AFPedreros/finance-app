import { api } from "@/lib/api-client";

export async function getHello() {
  try {
    const response = await api.hello.$get();

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching hello:", error);

    return { message: "Error fetching hello" };
  }
}

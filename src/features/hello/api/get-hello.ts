import { getBaseURL } from "@/lib/utils";

export async function getHello() {
  try {
    const baseUrl = getBaseURL();
    const url = `${baseUrl}/api/hello`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log("[RESPONSE]", data);

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching hello:", error);

    return { message: error };
  }
}

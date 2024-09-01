import { queryOptions, useQuery } from "@tanstack/react-query";

import { UseHelloOptions } from "../types";

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

export const getHelloQueryOptions = () => {
  return queryOptions({
    queryKey: ["get-hello"],
    queryFn: () => getHello(),
    staleTime: 1000 * 60 * 60,
  });
};

export function useHello({ queryConfig }: UseHelloOptions) {
  return useQuery({
    ...getHelloQueryOptions(),
    ...queryConfig,
  });
}

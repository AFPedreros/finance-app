import { getHelloQueryOptions } from "../api/get-hello";

import { QueryConfig } from "@/lib/react-query";

export type UseHelloOptions = {
  queryConfig?: QueryConfig<typeof getHelloQueryOptions>;
};

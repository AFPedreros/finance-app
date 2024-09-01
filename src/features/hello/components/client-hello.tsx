"use client";

import { Skeleton } from "@nextui-org/skeleton";

import { useHello } from "../api/get-hello";

export function ClientHello() {
  const { data, isFetching } = useHello({});

  return (
    <code>
      {isFetching && (
        <div className="flex h-6 w-full items-center justify-center">
          <Skeleton className="h-4 w-full min-w-36 rounded-md bg-default-300" />
        </div>
      )}
      {!isFetching && data?.message}
    </code>
  );
}

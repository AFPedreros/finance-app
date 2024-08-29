import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Skeleton } from "@nextui-org/skeleton";
import { Suspense } from "react";

import { GithubIcon, HonoLogo, NextLogo } from "@/components/icons";
import { ServerHello } from "@/features/hello/components/server-hello";

export const experimental_ppr = true;

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center gap-6">
      <div className="flex gap-8">
        <NextLogo className="h-24 w-auto text-black duration-300 hover:drop-shadow-[0_0_2rem_#61DAFB] dark:text-white" />
        <HonoLogo className="h-24 w-auto text-black duration-300 hover:drop-shadow-[0_0_2rem_#FF5B11] dark:text-white" />
      </div>

      <h1 className="text-5xl font-bold">Next + Hono</h1>
      <div className="flex flex-col items-center gap-4">
        <Button
          isExternal
          as={Link}
          className="w-fit text-sm"
          href="https://github.com/AFPedreros/react-finance-app"
          size="md"
          startContent={<GithubIcon />}
          variant="bordered"
        >
          {" "}
          Github
        </Button>

        <div className="flex flex-col items-center">
          <Suspense
            fallback={
              <div className="flex h-6 w-full items-center justify-center">
                <Skeleton className="h-4 w-full min-w-36 rounded-lg bg-default-300" />
              </div>
            }
          >
            <ServerHello />
          </Suspense>
          {/* <ClientHello /> */}
        </div>
        {/* <CreateHello /> */}
      </div>
      <p className="text-center text-tiny text-foreground-400">
        The API handling the form fails 50% of the time. To improve UX, we use
        optimistic updates: the local state updates immediately, and if the API
        request fails, it reverts to the previous state seamlessly.
      </p>
    </div>
  );
}

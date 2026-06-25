import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/jetbrains-mono/400.css";

import "../styles.css";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center text-white">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-white/60">
          The page you're looking for doesn't exist.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-4 py-2 border border-white/20"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center text-white">
        <h1 className="text-2xl mb-4">
          Something went wrong
        </h1>

        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="border px-4 py-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
/// <reference types="vite/client" />
import type { ReactNode } from "react";

import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

import tailwind from "@/routes/globals.css?url";

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      <TanStackDevtools
        // oxlint-disable-next-line react-perf/jsx-no-new-object-as-prop
        config={{
          position: "bottom-left",
        }}
        // oxlint-disable-next-line react-perf/jsx-no-new-array-as-prop
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
          {
            name: "TanStack Query",
            render: <ReactQueryDevtoolsPanel />,
          },
        ]}
      />
    </RootDocument>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Swyrin Playground",
      },
    ],
    links: [{ rel: "stylesheet", href: tailwind }],
  }),
  component: RootComponent,
});

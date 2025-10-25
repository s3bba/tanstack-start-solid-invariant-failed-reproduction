/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/solid-router'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'
import { HydrationScript } from 'solid-js/web'
import type * as Solid from 'solid-js'
import type { QueryClient } from '@tanstack/solid-query'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: Solid.JSX.Element }) {
  return (
    <html>
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <SolidQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  )
}

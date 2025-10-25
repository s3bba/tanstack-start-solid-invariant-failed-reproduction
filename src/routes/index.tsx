import { useQuery } from '@tanstack/solid-query';
import { createFileRoute, redirect } from '@tanstack/solid-router'
import { createServerFn, useServerFn } from '@tanstack/solid-start';
import { getCookie } from '@tanstack/solid-start/server';
import { Suspense } from 'solid-js';

export const redirectServerFn = createServerFn().handler(async () => {
  const cookie = getCookie("random_missing_cookie");
  if (cookie === undefined) {
    throw redirect({ to: "/about" })
  }
  return "Why do you have this coookie set? The reproduction is for redirect handling...";
});

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const redirectFn = useServerFn(redirectServerFn);
  const query = useQuery(() => ({
    queryKey: ["reproduction"],
    queryFn: () => redirectFn()
  }));

  return (
    <div>
      <Suspense>
        <div>{JSON.stringify(query.data)}</div>
      </Suspense>
    </div>
  )
}

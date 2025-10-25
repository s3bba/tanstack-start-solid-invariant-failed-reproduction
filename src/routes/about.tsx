import { createFileRoute, Link } from "@tanstack/solid-router"

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {

  return (
    <div>
      <p>About</p>
      <Link to="/">Back to /</Link>
    </div>
  )
}

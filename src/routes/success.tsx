import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/success")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/success"!</h1>
      <Link to="/">Return</Link>
    </div>
  );
}

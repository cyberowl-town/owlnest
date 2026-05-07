import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return <div className="text-xl">Kamito was here</div>;
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

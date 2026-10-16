import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/venue")({
  head: () => ({
    meta: [{ title: "Venue & Travel | ICSEECA - ICETS 2027" }],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/venue-travel" });
  },
});

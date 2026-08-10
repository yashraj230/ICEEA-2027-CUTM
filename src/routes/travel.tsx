import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [{ title: "Venue & Travel | ICEEA - ICETS 2027" }],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/venue-travel" });
  },
});

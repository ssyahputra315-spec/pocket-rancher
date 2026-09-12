import { createFileRoute } from "@tanstack/react-router";
import { FarmApp } from "@/components/farm-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farm Dashboard — Livestock Farm Management" },
      { name: "description", content: "Offline dashboard for livestock counts, daily tasks, feed cost, and monthly cash flow." },
      { property: "og:title", content: "Farm Dashboard — Livestock Farm Management" },
      { property: "og:description", content: "Offline dashboard for livestock counts, daily tasks, feed cost, and monthly cash flow." },
    ],
  }),
  component: () => <FarmApp section="dashboard" />,
});

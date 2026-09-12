import { createFileRoute } from "@tanstack/react-router";
import { FarmApp } from "@/components/farm-app";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Farm Finance — Livestock Farm Management" },
      { name: "description", content: "Log expenses and sales, then review income, costs, and net cash flow by period." },
      { property: "og:title", content: "Farm Finance — Livestock Farm Management" },
      { property: "og:description", content: "Log expenses and sales, then review income, costs, and net cash flow by period." },
    ],
  }),
  component: () => <FarmApp section="finance" />,
});

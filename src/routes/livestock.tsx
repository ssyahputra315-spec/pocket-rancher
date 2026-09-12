import { createFileRoute } from "@tanstack/react-router";
import { FarmApp } from "@/components/farm-app";

export const Route = createFileRoute("/livestock")({
  head: () => ({
    meta: [
      { title: "Livestock Records — Livestock Farm Management" },
      { name: "description", content: "Track individual animals and batches with weight, health, and breeding history." },
      { property: "og:title", content: "Livestock Records — Livestock Farm Management" },
      { property: "og:description", content: "Track individual animals and batches with weight, health, and breeding history." },
    ],
  }),
  component: () => <FarmApp section="livestock" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { FarmApp } from "@/components/farm-app";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "Breeding, Tasks & Reports — Livestock Farm Management" },
      { name: "description", content: "Breeding records, farm tasks, CSV reports, backup and restore, and farm settings." },
      { property: "og:title", content: "Breeding, Tasks & Reports — Livestock Farm Management" },
      { property: "og:description", content: "Breeding records, farm tasks, CSV reports, backup and restore, and farm settings." },
    ],
  }),
  component: () => <FarmApp section="more" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { FarmApp } from "@/components/farm-app";

export const Route = createFileRoute("/feed")({
  head: () => ({
    meta: [
      { title: "Feed Inventory — Livestock Farm Management" },
      { name: "description", content: "Record feed purchases, watch low stock, and log daily feed usage offline." },
      { property: "og:title", content: "Feed Inventory — Livestock Farm Management" },
      { property: "og:description", content: "Record feed purchases, watch low stock, and log daily feed usage offline." },
    ],
  }),
  component: () => <FarmApp section="feed" />,
});

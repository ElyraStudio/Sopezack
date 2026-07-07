import { createLazyFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/sections/AdminPanel";

export const Route = createLazyFileRoute("/admin")({
  component: AdminRoute,
});

function AdminRoute() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AdminPanel />
    </div>
  );
}
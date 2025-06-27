"use client";

import { Sidebar } from "@/components/organisms/Sidebar";
import { Home } from "@/components/templates/Home";

export default function Index() {
  return (
    <div className="flex w-full h-full bg-gray-50">
      <Sidebar />
      <Home />
    </div>
  );
}

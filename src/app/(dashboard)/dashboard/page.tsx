"use client";

import { Athletes } from "@/components/athletes";
import { Filter } from "@/components/filter";

export default function Page() {
  return (
    <main className="flex min-h-[calc(100vh-116px)]">
      <Athletes />
      <Filter />
    </main>
  );
}

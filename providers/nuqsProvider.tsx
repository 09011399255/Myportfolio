"use client";

import { NuqsAdapter } from "nuqs/adapters/next";
import { ReactNode } from "react";

export default function NuqsProvider({ children }: { children: ReactNode }) {
  return <NuqsAdapter>{children}</NuqsAdapter>;
}
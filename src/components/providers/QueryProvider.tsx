"use client";

import { ChildrenNode } from "@/shared/types";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function QueryProvider({ children }: ChildrenNode) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

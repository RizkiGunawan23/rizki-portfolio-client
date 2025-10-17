import { Geist } from "next/font/google";
import React from "react";

import QueryProvider from "@/components/providers/QueryProvider";

import { ChildrenNode } from "@/shared/types";
import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

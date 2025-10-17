import ScrollbarDetector from "@/components/ScrollbarDetector";
import { ScrollProvider } from "@/components/providers/ScrollProvider";

import Footer from "@/features/public/components/layout/Footer";
import Header from "@/features/public/components/layout/Header";
import { ChildrenNode } from "@/shared/types";

export default function PublicLayout({ children }: ChildrenNode) {
  return (
    <ScrollProvider>
      <ScrollbarDetector />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

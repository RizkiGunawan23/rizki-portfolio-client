import Footer from "@/features/public/components/layout/Footer";
import Header from "@/features/public/components/layout/Header";
import { ChildrenNode } from "@/shared/types";

export default function PublicLayout({ children }: ChildrenNode) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

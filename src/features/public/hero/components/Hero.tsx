import Carousel from "@/features/public/hero/components/Carousel";
import Summary from "@/features/public/hero/components/Summary";

export default function Hero() {
  return (
    <div className="flex h-full w-full flex-col pt-20">
      {/* Main content area - takes remaining space */}
      <div className="flex flex-1 items-center justify-center">
        <Summary />
      </div>

      {/* Carousel at bottom - fixed height */}
      <div className="h-full w-full">
        <Carousel />
      </div>
    </div>
  );
}

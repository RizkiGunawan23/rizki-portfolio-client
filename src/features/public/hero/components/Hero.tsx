import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto flex items-center justify-center gap-10">
      <div>
        <Image src="/Hero Logo.png" alt="Hero Logo" width={500} height={500} />
      </div>
      <div className="space-y-2">
        <h2 className="text-7xl font-bold text-white">
          Hi, I&apos;m Rizki <span className="text-[#71eaca]">.</span>
        </h2>
        <h2 className="bg-gradient-to-r from-[#7f98b6] to-[#535e6c] bg-clip-text text-5xl font-bold text-transparent">
          Backend Developer
        </h2>
        <div>
          <Image
            alt="Spring Logo"
            src={"/Spring Logo.png"}
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}

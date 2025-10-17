import Image from "next/image";

export default function Summary() {
  console.log("Summary");

  return (
    <div className="mx-auto flex items-center justify-center gap-10">
      <div>
        <Image src="/Hero Logo.png" alt="Hero Logo" width={500} height={500} />
      </div>
      <div className="space-y-3">
        <h2 className="text-7xl font-bold text-white">
          Hi, I&apos;m Rizki <span className="text-[#71eaca]">.</span>
        </h2>
        <h2 className="bg-gradient-to-r from-[#7f98b6] to-[#535e6c] bg-clip-text text-5xl font-bold text-transparent">
          Backend Developer
        </h2>
        <div className="flex flex-wrap space-x-3">
          <Image
            alt="Spring Logo"
            src={"/Spring Logo.png"}
            width={50}
            height={0}
          />
          <Image
            alt="Express Logo"
            src={"/Express Logo.png"}
            width={135}
            height={0}
          />
          <Image
            alt="Django REST Framework Logo"
            src={"/Django REST Framework Logo.png"}
            width={100}
            height={0}
          />
          <Image alt="Next Logo" src={"/Next Logo.png"} width={75} height={1} />
          <Image
            alt="React Logo"
            src={"/React Logo.png"}
            width={55}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#02111B]">
      <div className="flex h-40 flex-col items-center justify-center gap-y-6 rounded-2xl bg-[#091c29] p-5 shadow-md shadow-neutral-200">
        <h2 className="text-5xl font-bold text-white">Page Not Found</h2>
        <Link
          href="/"
          className="rounded-xl bg-[#FCFCFC] p-2 text-neutral-800 hover:bg-[#e0e0e0]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

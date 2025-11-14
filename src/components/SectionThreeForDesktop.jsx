"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGridDemo } from "./CustomBentoGridDemoForDesktop";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // available styles: Light 300, Regular 400, Bold 700
});


export function BackgroundBeamsDemoForDesktop() {
  return (
    <div className="relative w-full rounded-md bg-neutral-950 overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Content */}
      <h2 className={`relative z-10 text-center font-bold text-5xl text-white mb-12 .  ${openSans.className}`}>
        OUR SERVICES
      </h2>

      <div className="relative z-10 flex items-center justify-center">
        <BentoGridDemo />
      </div>
    </div>
  );
}

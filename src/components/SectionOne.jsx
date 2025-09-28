"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextGenerateEffectForPara } from "./textGenerateEffectForPara";

export function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          <TextGenerateEffectDemo />
        </h2>
        <div className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          <TextGenerateEffectDemoForPara />
        </div>
      </div>
    </div>
  );
}

const words = `IDEAS IN MOTION INNOVATION IN ACTION`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

const wordsForPara = `  A leading innovator in robotics and automation, dedicated to
          empowering education, industries, and individuals with smart,
          reliable, and future-ready technology solutions. We design and develop
          advanced robotics kits, IoT systems, and automation projects that
          bridge the gap between creativity and practical innovation. With a
          focus on learning, research, and real-world applications, we strive to
          inspire the next generation of thinkers, makers, and problem-solvers.`;

export function TextGenerateEffectDemoForPara() {
  return <TextGenerateEffectForPara words={wordsForPara} />;
}

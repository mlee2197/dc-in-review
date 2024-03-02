"use client";

import { LargeGondola } from "@/components/LargeGondola";
import { useGondolaScene } from "@/hooks/useGondolaScene";
import gsap from "gsap";

export const MonumentScene = () => {
  const timelineAnimation = (tl: gsap.core.Timeline) => {};

  const containerRef = useGondolaScene(timelineAnimation);

  return (
    <div ref={containerRef} className="scene-container">
      <LargeGondola>
        <div className="relative flex items-center justify-center h-full w-full bg-black overflow-hidden">

        </div>
      </LargeGondola>
    </div>
  );
};

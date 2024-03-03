"use client";

import { Candle } from "@/components/Candle";
import { Clock } from "@/components/Clock";
import { LargeGondola } from "@/components/LargeGondola";
import { SkullJar } from "@/components/SkullJar";
import { useGondolaScene } from "@/hooks/useGondolaScene";
import gsap from "gsap";

export const EscapeRoom = () => {
  const timelineAnimation = (tl: gsap.core.Timeline) => {
    // clock
    tl.to(
      ".clock .hour-hand",
      { rotate: 280, ease: "sine.out", duration: 1 },
      "<"
    ).to(
      ".clock .minute-hand",
      { rotate: 360 + 120, ease: "sine.out", duration: 1 },
      "<"
    );

    // candles
    const candleFlames = gsap.utils.toArray(".candle .flame");
    candleFlames.forEach((flame) => {
      tl
      .to(flame as any, { opacity: 1, stagger: 0.25, ease: "bounce" }, "<")
      .to(
        flame as any,
        {
          skewX: Math.random() * 3 + 3,
          scale: Math.random() * 0.1 + 1,
          repeat: 8,
          ease: "steps(3)",
          delay: Math.random() * 0.5,
        },
        "<"
      );
    });

    // skull jar
    tl.to(
      ".skull-jar .skull",
      { rotate: 0, yPercent: -50, ease: "elastic.out(1, 0.3)", duration: 3},
      "<"
    ).to(
      ".skull-jar .liquid",
      { yPercent: -60, xPercent: 20, ease: "bounce", duration: 1.5 },
      "<"
    );
  };

  const containerRef = useGondolaScene(timelineAnimation);

  return (
    <div ref={containerRef} className="scene-container">
      <LargeGondola title="Escape Room Live - Alexandria">
        <div className="relative flex items-end justify-center h-full w-full bg-black overflow-hidden">
          <div className="flex items-end">
            <Clock />
            <Candle size="small" />
            <Candle size="medium" />
            <Candle size="large" className="hidden md:block" />
            <SkullJar />
            <Candle size="large" className="hidden md:block" />
            <Candle size="medium" />
            <Candle size="small" />
          </div>
        </div>
      </LargeGondola>
    </div>
  );
};

"use client";

import { BulletCircle } from "@/components/BulletCircle";
import { LargeGondola } from "@/components/LargeGondola";
import { Suitcase } from "@/components/Suitcase";
import { Target } from "@/components/Target";
import { Umbrella } from "@/components/Umbrella";
import { useGondolaScene } from "@/hooks/useGondolaScene";
import gsap from "gsap";

const numUmbrellas = 6;
const numBulletCircles = 6;
const numSuitcases = 12;
const umbrellaPositions = [
  { x: 0, y: 100 },
  { x: -75, y: 75 },
  { x: -75, y: 25 },
  { x: 0, y: 0 },
  { x: 75, y: 25 },
  { x: 75, y: 75 },
];
const bulletCirclePositions = [
  { x: 47, y: -85 },
  { x: 85, y: 0 },
  { x: 47, y: 85 },
  { x: -47, y: 85 },
  { x: -85, y: 0 },
  { x: -47, y: -85 },
];
const suitcasePositions = [
  { x: 50, y: -230 },
  { x: 165, y: -170 },
  { x: 230, y: -65 },
  { x: 230, y: 65 },
  { x: 165, y: 170 },
  { x: 50, y: 230 },

  { x: -50, y: 230 },
  { x: -165, y: 170 },
  { x: -230, y: 65 },
  { x: -230, y: -65 },
  { x: -165, y: -170 },
  { x: -50, y: -230 },
];

const SpyKaleidoscope = () => {
  const timelineAnimation = (tl: gsap.core.Timeline) => {
    // target
    tl.to(".target", { rotate: 360, scale: 1 }, "<");

    // umbrellas
    const umbrellas = gsap.utils.toArray(".umbrella");
    gsap.set(umbrellas, { transformOrigin: "50% 0%", yPercent: 50 });
    umbrellas.forEach((umbrella, i) => {
      tl.to(
        umbrella as any,
        {
          xPercent: umbrellaPositions[i].x,
          yPercent: umbrellaPositions[i].y,
          rotate: i * 60,
          opacity: 1,
        },
        "<"
      );
    });

    // bullet circles
    const bullets = gsap.utils.toArray(".bullet");
    gsap.set(bullets, { transformOrigin: "50% 0%", opacity: 0 });
    bullets.forEach((bullet, i) => {
      const angle = -(i % 6) * (360 / 6);
      tl.to(
        bullet as any,
        {
          opacity: 1,
          rotate: angle,
        },
        "<"
      );
    });

    // suitcases
    gsap.utils.toArray(".suitcase").forEach((suitcase, i) => {
      tl.to(
        suitcase as any,
        {
          xPercent: suitcasePositions[i].x,
          yPercent: suitcasePositions[i].y,
          rotate: i * 30 + 15,
        },
        "<"
      );
    });
  };

  const container = useGondolaScene(timelineAnimation);

  return (
    <div
      ref={container}
      className="scene-container from-blue-400 to-[#8a8aff] bg-gradient-to-b"
    >
      <LargeGondola title="Museum of Illusions & International Spy Museum">
        <div className="relative flex items-center justify-center h-full w-full bg-black overflow-hidden">
          <Target />
          {Array.from({ length: numUmbrellas }).map((_, i) => (
            <Umbrella key={`umbrella-${i}`} />
          ))}
          {Array.from({ length: numBulletCircles }).map((_, i) => (
            <BulletCircle
              key={`bullet-circle-${i}`}
              xOffset={bulletCirclePositions[i].x}
              yOffset={bulletCirclePositions[i].y}
            />
          ))}
          {Array.from({ length: numSuitcases }).map((_, i) => (
            <Suitcase key={`suitcase-${i}`} />
          ))}
        </div>
      </LargeGondola>
    </div>
  );
};

export { SpyKaleidoscope };

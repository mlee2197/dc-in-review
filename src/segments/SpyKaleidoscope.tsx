"use client";

import { Bullet } from "@/components/Bullet";
import { BulletCircle } from "@/components/BulletCircle";
import { LargeGondola } from "@/components/LargeGondola";
import { Suitcase } from "@/components/Suitcase";
import { Target } from "@/components/Target";
import { Umbrella } from "@/components/Umbrella";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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
  { x: 10, y: -30 },
  { x: 20, y: 0 },
  { x: 10, y: 30 },
  { x: -10, y: 30 },
  { x: -20, y: 0 },
  { x: -10, y: -30 },
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
  const container = useRef(null);
  useGSAP(
    () => {
      const initialX = -25;
      const initialScale = 0.5;
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".gondola", { xPercent: initialX, scale: initialScale });
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });
      tl.to(".gondola", { xPercent: initialX, scale: initialScale }).to(
        ".gondola",
        {
          xPercent: 0,
          scale: 1,
        }
      );

      tl.to(".target", { rotate: 360, scale: 1 }, "<");

      gsap.utils.toArray(".umbrella").forEach((umbrella, i) => {
        gsap.set(umbrella as any, { transformOrigin: "50% 0%", yPercent: 50 });
        tl.to(
          umbrella as any,
          {
            xPercent: umbrellaPositions[i].x,
            yPercent: umbrellaPositions[i].y,
            rotate: i * 60,
          },
          "<"
        );
      });
      gsap.utils.toArray(".suitcase").forEach((suitcase, i) => {
        // gsap.set(suitcase as any);
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

      tl.to(".gondola", { xPercent: initialX, scale: initialScale });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center fill-screen bg-blue-400"
    >
      <LargeGondola className="gondola">
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
              containerRef={container}
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

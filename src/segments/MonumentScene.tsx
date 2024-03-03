"use client";

import { Bird } from "@/components/Bird";
import { LargeGondola } from "@/components/LargeGondola";
import { useGondolaScene } from "@/hooks/useGondolaScene";
import gsap from "gsap";
import Image from "next/image";

const BIRD_POSITIONS = [
  { x: -400, y: -100 },
  { x: -300, y: -270 },
  { x: 150, y: -90 },
  { x: 350, y: -250 },
  { x: 500, y: -160 },
];

export const MonumentScene = () => {
  const timelineAnimation = (tl: gsap.core.Timeline) => {
    gsap.set(".monument", { transformOrigin: "center bottom" });
    gsap.set(".shadow", { transformOrigin: "center top" });
    tl.fromTo(
      ".monument",
      { scaleY: 0 },
      {
        scaleY: 1,
      }
    ).fromTo(
      ".shadow",
      { scaleY: 0 },
      {
        scaleY: 1,
      },
      "<"
    );

    const birds = gsap.utils.toArray(".bird");
    gsap.set(birds, { yPercent: 100 });
    birds.forEach((bird, i) => {
      gsap.set(bird as HTMLElement, {
        rotate: i < 2 ? -25 : 25,
      });

      tl.to(bird as HTMLElement, {
        xPercent: BIRD_POSITIONS[i].x,
        yPercent: BIRD_POSITIONS[i].y,
        duration: 1,
        ease: "power1.out",
      }, "<");
    });
  };

  const containerRef = useGondolaScene(timelineAnimation);

  return ( 
    <div ref={containerRef} className="scene-container from-[#341358] to-[#150e5c] bg-gradient-to-b">
      <LargeGondola title="Washington Monument">
        <div className="relative grid grid-rows-5 h-full w-full bg-black overflow-hidden">
          <div className="monument relative flex items-end justify-center row-span-3 -mb-1">
            <Image
              src="/images/monument/monument.svg"
              alt="monument"
              fill
              className="object-contain pt-2"
            />
            <Bird />
            <Bird />

            <Bird />
            <Bird />
            <Bird />
          </div>
          <div className="relative row-span-2 h-full bg-white">
            <Image
              src="/images/monument/monument_shadow.svg"
              alt="monument shadow"
              fill
              className="shadow object-contain py-1"
            />
          </div>
        </div>
      </LargeGondola>
    </div>
  );
};

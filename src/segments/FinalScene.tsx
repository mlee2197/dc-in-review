"use client";

import { LargeGondola } from "@/components/LargeGondola";
import { useGondolaScene } from "@/hooks/useGondolaScene";
import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ARROW_MATRIX = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const MOBILE_ARROW_MATRIX = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const FinalScene = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const ArrowMatrix = isMobile ? MOBILE_ARROW_MATRIX : ARROW_MATRIX;

  const timelineAnimation = (tl: gsap.core.Timeline) => {
    const textRows = gsap.utils.toArray(".text-row");

    tl.addLabel("start");
    textRows.forEach((row, i) => {
      const raisedY = -4;
      const raisedX = 8;
      const showTl = gsap.timeline({
        defaults: { y: raisedY, x: raisedX, opacity: 1, ease: "power2.out" },
      });
      const hideTl = gsap.timeline({ duration: 0.5 });
      const words = gsap.utils.toArray((row as HTMLElement).children);
      words.forEach((word, j) => {
        const showValues = {
          y: raisedY,
          x: raisedX,
          opacity: 1,
        };
        const hideValues = {
          y: 0,
          x: 0,
          opacity: 0.25,
          ease: "power2.out",
        };
        showTl.to(word as any, { duration: 0.5 }, "-=0.45");
        hideTl.to(
          word as any,
          ArrowMatrix[i][j] === 0 ? hideValues : showValues,
          "-=0.45"
        );
      });
      tl.add(showTl, "start");
      tl.add(hideTl, ">-=0.5");
    });
  };

  const containerRef = useGondolaScene(timelineAnimation);

  return (
    <div
      ref={containerRef}
      className="scene-container from-[#150e5c] to-[#07093a] bg-gradient-to-b"
    >
      <LargeGondola title="Itinerary">
        <Link href="/itinerary">
          <div className="relative flex items-center justify-center h-full w-full bg-black overflow-hidden">
            {Array.from({ length: ArrowMatrix.length }).map((_, i) => (
              <div
                key={i}
                className="text-row divide-x-4"
                style={{ top: `${i * (100 / ArrowMatrix.length)}%` }}
              >
                {Array.from({ length: ArrowMatrix[0].length }).map((_, j) => (
                  <div
                    key={j}
                    className={clsx(
                      ArrowMatrix[i][j] === 0 && "animate-word",
                      "inline-block text-white opacity-25 border-transparent"
                    )}
                  >
                    Next
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Link>
      </LargeGondola>
    </div>
  );
};

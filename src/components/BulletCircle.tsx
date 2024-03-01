"use client";

import { useRef } from "react";
import { Bullet } from "./Bullet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface BulletCircleProps {
  containerRef: React.MutableRefObject<any>;
  yOffset: number;
  xOffset: number;
}

const BulletCircle = ({
  containerRef,
  xOffset,
  yOffset,
}: BulletCircleProps) => {
  const circleRef = useRef(null);
  useGSAP(
    () => {
      if (circleRef.current === null) return;
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      });
      const bullets = gsap.utils.toArray((circleRef.current as any).children);
      bullets.forEach((bullet, i) => {
        const angle = -i * (360 / 6);
        gsap.set(bullet as any, { transformOrigin: "50% 0%", yPercent: 50 });
        tl.to(
          bullet as any,
          {
            rotate: angle,
          },
          "<"
        );
      });
    },
    { scope: containerRef.current }
  );

  return (
    <div
      ref={circleRef}
      className="flex items-center justify-center absolute w-[20%] aspect-square -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${xOffset + 50}%`, top: `${yOffset + 50}%` }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <Bullet key={`bullet-${i}`} />
      ))}
      {/* <Bullet /> */}
    </div>
  );
};

export { BulletCircle };

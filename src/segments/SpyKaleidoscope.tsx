"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const SpyKaleidoscope = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top+=150",
          scrub: true,
          markers: true,
        },
      });
      tl.to(".test", { translateX: 0 })
        .to(".test", { translateX: 200 })
        .to(".test", { translateX: 0 });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center fill-screen bg-green-400"
    >
      <h1 className="test rotate-0">SpyKaleidoscope</h1>
    </div>
  );
};

export { SpyKaleidoscope };

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const useGondolaScene = (
  sceneAnimation: (tl: gsap.core.Timeline) => void
) => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const initialX = -25;
      const initialScale = 0.5;
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".gondola", { xPercent: initialX, scale: initialScale });
      const gondolaTl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "bottom center+=50",
          scrub: true,
        },
      });
      gondolaTl
        .to(".gondola", { xPercent: initialX, scale: initialScale })
        .to(".gondola", {
          xPercent: 0,
          scale: 1,
        })
        .to(".title", { opacity: 0.35 })
        .to(".gondola", { xPercent: initialX, scale: initialScale });

      const sceneTl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=50",
          end: "bottom center+=50",
          toggleActions: "play reverse play reverse",
        },
      });
      sceneAnimation(sceneTl);
    },
    { scope: containerRef }
  );
  return containerRef;
};

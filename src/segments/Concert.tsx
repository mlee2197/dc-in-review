"use client";

import { ConcertLight } from "@/components/ConcertLight";
import { ConcertStage } from "@/components/ConcertStage";
import { LargeGondola } from "@/components/LargeGondola";
import { useGondolaScene } from "@/hooks/useGondolaScene";
import gsap from "gsap";
import Image from "next/image";

export const Concert = () => {
  const timelineAnimation = (tl: gsap.core.Timeline) => {
    const lights = gsap.utils.toArray(".concert-light");
    const half = Math.ceil(lights.length / 2);
    const lightsLeft = lights.slice(0, half);
    const lightsRight = lights.slice(-half);

    gsap.set(".dj", { opacity: 0 });
    gsap.set(lights, { transformOrigin: "center bottom" });
    lightsLeft.forEach((light, i) => {
      gsap.set(light as HTMLElement, {
        opacity: 0,
        xPercent: -i * 20 - 30,
        rotate: -i * 10 - 20,
      });
    });

    lightsRight.forEach((light, i) => {
      gsap.set(light as HTMLElement, {
        opacity: 0,
        xPercent: i * 20 + 30,
        rotate: i * 10 + 20,
      });
    });

    tl.fromTo(
      lightsLeft,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      },
      "<"
    );
    tl.fromTo(
      lightsRight,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      },
      "<"
    );

    tl.to(lightsLeft, {
      rotate: 10,
      stagger: 0.1,
      ease: "circ.out",
    })
      .to(
        lightsRight,
        {
          rotate: -10,
          stagger: 0.1,
          ease: "circ.out",
        },
        "<"
      )
      .to(".dj", {
        opacity: 1,
        duration: 0,
      })
      .to(
        lightsLeft,
        {
          rotate: -20,
          stagger: 0.1,
          ease: "circ.in",
        },
        "<"
      )
      .to(
        lightsRight,
        {
          rotate: 20,
          stagger: 0.1,
          ease: "circ.in",
        },
        "<"
      )
      .to(".crowd", { yPercent: -60, ease: "elastic.out(0.75,0.2)", duration: 2 });
  };

  const containerRef = useGondolaScene(timelineAnimation);

  return (
    <div ref={containerRef} className="scene-container">
      <LargeGondola title="Echostage: Crankdat w/ Jessica Audiffred & ALLEYCVT">
        <div className="relative flex items-center justify-center h-full w-full bg-black overflow-hidden">
          <ConcertStage />
          <ConcertLight />
          <ConcertLight />
          <ConcertLight />

          <ConcertLight />
          <ConcertLight />
          <ConcertLight />
          <div className="crowd w-full absolute bottom-0 translate-y-3/4">
            <Image
              src="/images/concert/crowd.webp"
              alt="crowd"
              width={900}
              height={200}
              className="object-contain"
            />
            {/* <a href="https://www.vecteezy.com/free-vector/party">Party Vectors by Vecteezy</a> */}
          </div>
        </div>
      </LargeGondola>
    </div>
  );
};

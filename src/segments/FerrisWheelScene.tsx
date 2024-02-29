"use client";
import { FerrisWheel } from "@/components/FerrisWheel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
import Image from "next/image";

export const FerrisWheelScene = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      // title animation
      const title = new SplitType("#title", { types: "words" });
      const titleTl = gsap.timeline();
      gsap.set(title.words, { y: -100, opacity: 0, scaleY: 0.35 });
      gsap.set("button", { y: -50, opacity: 0, scaleY: 0.35 });
      titleTl
        .to("#ferris-wheel", { y: 0, duration: 1, ease: "power1.inOut" })
        .to("#cloud-1", { translateX: 0, duration: 1.5, ease: "power2.inOut" }, "<")
        .to("#cloud-2", { translateX: 0, duration: 1.5, ease: "power2.inOut" }, "<")
        .to("#title", { opacity: 1, duration: 0 }, "-=0.25")
        .to(
          title.words!.reverse(),
          {
            y: 0,
            opacity: 1,
            duration: 1.25,
            scaleY: 1,
            ease: "bounce",
            stagger: 0.2,
          },
          "<"
        )
        .to("button", {
          y: 0,
          opacity: 1,
          duration: 0.75,
          scaleY: 1,
          ease: "bounce",
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative overflow-hidden flex flex-col justify-around fill-screen bg-blue-400 md:justify-start"
    >
      <div className="relative px-6">
        <h1 id="title" className="text-8xl opacity-0">
          DC Dreams
        </h1>
        <button className="button-outline text-xl mt-4 opacity-0">
          Explore
        </button>
      </div>
      <div id="ferris-wheel" className="relative translate-y-full">
        <FerrisWheel />
      </div>
      <div id="cloud-1" className="absolute w-1/2 bg-red top-[5%] right-0 translate-x-full drop-shadow-lg">
        <Image
          
          src={"/images/ferris-wheel/cloud1.svg"}
          height={250}
          width={500}
          alt="cloud"
          className="object-cover"
        />
      </div>
      <div id="cloud-2" className="absolute w-1/2 bg-red top-[40%] -translate-x-full drop-shadow-lg">
        <Image
          src={"/images/ferris-wheel/cloud2.svg"}
          height={250}
          width={500}
          alt="cloud"
          className="object-cover"
        />
      </div>
    </div>
  );
};

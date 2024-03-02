"use client"
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

interface CloudCoverProps {
  showInitial?: boolean;
}

const CloudCover = ({ showInitial }: CloudCoverProps) => {
  const container = useRef(null);
  useGSAP(
    () => {
      if (!showInitial) return;
      gsap.to(container.current, {
        translateY: "-100%",
        duration: 1,
        ease: "power1.out",
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      id="cloud-cover"
      className={clsx(
        "fixed flex w-screen h-[150vh] top-0 z-10",
        showInitial
          ? "flex-col-reverse -translate-y-0"
          : "flex-col translate-y-full"
      )}
    >
      <Image
        src="/images/ferris-wheel/cloud3.svg"
        alt="cloud cover"
        width={2000}
        height={250}
        className={`max-w-full object-cover ${
          showInitial ? "rotate-180 -translate-y-1" : "rotate-0 translate-y-1"
        }`}
      />
      <div className={"bg-white w-full h-full"}></div>
    </div>
  );
};

export { CloudCover };

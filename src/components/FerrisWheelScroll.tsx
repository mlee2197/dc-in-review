"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

const FerrisWheelScroll = () => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const rotateDegrees = (window.scrollY / window.innerHeight) * 90;
      setRotation(rotateDegrees);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed -left-[150%] h-[100vh] aspect-square md:w-screen md:-left-1/2">
      <Image
        src="/images/ferris-wheel/ferris_wheel.svg"
        alt="ferris wheel"
        fill
        priority
        className=""
        style={{ rotate: `-${rotation}deg` }}
      />
      <Image
        src="/images/ferris-wheel/ferris_wheel_platform.svg"
        alt="ferris wheel platform"
        fill
        className="absolute bottom-0 translate-y-1/3 md:translate-y-1/2"
        priority
      />
    </div>
  );
};

export { FerrisWheelScroll };

"use client";
import { CloudCover } from "@/components/CloudCover";
import { FerrisWheelScroll } from "@/components/FerrisWheelScroll";
import { SpyKaleidoscope } from "@/segments/SpyKaleidoscope";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Explore() {
  const { contextSafe } = useGSAP();
  return (
    <div className="fill-screen bg-blue-400">
      <div className="relative">
        <CloudCover showInitial />
        <FerrisWheelScroll />
        <div className="fill-screen"/>
        <SpyKaleidoscope />
        <div className="fill-screen"/>
      </div>
    </div>
  );
}

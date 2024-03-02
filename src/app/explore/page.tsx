"use client";
import { CloudCover } from "@/components/CloudCover";
import { FerrisWheelScroll } from "@/components/FerrisWheelScroll";
import { Concert } from "@/segments/Concert";
import { EscapeRoom } from "@/segments/EscapeRoom";
import { MonumentScene } from "@/segments/MonumentScene";
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
        <div className="fill-screen flex justify-end items-center">
          <h1 className="flex gap-4 pr-20 text-right text-3xl">
            <span className="inline-block animate-bounce">↓</span>
            Scroll
            <span className="inline-block animate-bounce">↓</span>
          </h1>
        </div>
        <SpyKaleidoscope />
        <EscapeRoom />
        <Concert />
        <MonumentScene />
      </div>
    </div>
  );
}

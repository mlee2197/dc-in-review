import { CloudCover } from "@/components/CloudCover";
import { FerrisWheelScroll } from "@/components/FerrisWheelScroll";
import { Concert } from "@/segments/Concert";
import { EscapeRoom } from "@/segments/EscapeRoom";
import { FinalScene } from "@/segments/FinalScene";
import { MonumentScene } from "@/segments/MonumentScene";
import { SpyKaleidoscope } from "@/segments/SpyKaleidoscope";

export default function Explore() {
  return (
    <div className="fill-screen bg-blue-400">
      <div className="relative">
        <CloudCover showInitial />
        <FerrisWheelScroll />
        <div className="fill-screen flex justify-center items-end p-8 md:items-center">
          <h1 className="flex gap-4 text-right text-3xl">
            <span className="inline-block animate-bounce">↓</span>
            Scroll
            <span className="inline-block animate-bounce">↓</span>
          </h1>
        </div>
        <SpyKaleidoscope />
        <EscapeRoom />
        <Concert />
        <MonumentScene />
        <FinalScene />
      </div>
    </div>
  );
}

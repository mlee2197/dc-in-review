import Image from "next/image";
import { Gondola } from "./Gondola";

const centerOffset = 41;
const circleOffset = -15;

const FerrisWheel = () => {
  return (
    <div className="relative max-h-full max-w-[90%] aspect-square mx-auto">
      <div className="animate-[spin_45s_linear_infinite] relative w-full h-full">
        
        <Gondola leftPercent={0} />  {/* top left */}
        <Gondola leftPercent={centerOffset} topPercent={circleOffset} /> {/* top center */}
        <Gondola rightPercent={0} /> {/* top right */}
        <Gondola topPercent={centerOffset} leftPercent={circleOffset} /> {/* middle left */}
        <Gondola topPercent={centerOffset} rightPercent={circleOffset} /> {/* middle right */}
        <Gondola bottomPercent={0} leftPercent={0} /> {/* bottom left */}
        <Gondola bottomPercent={circleOffset} rightPercent={centerOffset} /> {/* bottom center */}
        <Gondola bottomPercent={0} rightPercent={0} /> {/* bottom right */}
        <Image
          src="/images/ferris-wheel/ferris_wheel.svg"
          alt="ferris wheel"
          fill
          priority
        />
      </div>

      <Image
        src="/images/ferris-wheel/ferris_wheel_platform.svg"
        alt="ferris wheel platform"
        fill
        className="h-max absolute bottom-0 translate-y-1/3"
        priority
      />
    </div>
  );
};

export { FerrisWheel };

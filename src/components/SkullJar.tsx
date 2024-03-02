import Image from "next/image";

export const SkullJar = (props: any) => {
  return (
    <div
      className="skull-jar max-h-[40%] h-[200px] w-[150px] grid grid-rows-10"
      {...props}
    >
      <div className="row-span-1 bg-white rounded-t-xl" />
      <div className="relative flex items-end justify-center row-span-9 border-2 border-t-0 rounded-b-lg overflow-hidden">
        <div className="absolute top-3 left-3 z-[1]">
          <div className="h-6 w-[2px] bg-white rounded-sm md:h-8" />
          <div className="h-2 w-[2px] mt-2 bg-white rounded-sm md:h-3" />
        </div>
        <Image
          src="/images/escape-room/skull.svg"
          alt="skull"
          width={50}
          height={75}
          className="skull relative rotate-90 z-[1]"
        />
        <Image
          src="/images/escape-room/wave.svg"
          alt="wave"
          fill
          className="liquid object-cover translate-y-3/4 scale-x-150"
        />
      </div>
    </div>
  );
};

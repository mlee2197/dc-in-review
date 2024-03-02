import Image from "next/image";

const ConcertStage = () => {
  return (
    <div className="absolute flex justify-center h-[50%] aspect-square">
      <Image
        src="/images/concert/concert_stage.svg"
        alt="Concert Stage"
        fill
        className="concert-stage object-contain"
      />
      <Image
        src="/images/concert/dj.svg"
        alt="DJ"
        width={300}
        height={150}
        className="dj object-contain max-w-[30%] translate-y-[9%]"
      />
    </div>
  );
};

export { ConcertStage };

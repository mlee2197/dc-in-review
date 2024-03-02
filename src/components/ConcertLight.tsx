import Image from "next/image";

const ConcertLight = () => {
  return (
    <div className="concert-light absolute h-[170%] aspect-[1/5]">
      <Image src="/images/concert/light.svg" alt="Conert Light" fill className="object-contain" />
    </div>
  );
}

export { ConcertLight };
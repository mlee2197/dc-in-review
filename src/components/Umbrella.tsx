import Image from "next/image";

const Umbrella = () => {
  return (
    <div className={`umbrella absolute w-[10%] aspect-[1/2]`}>
      <Image src="/images/spy/umbrella.svg" alt="Umbrella" fill className="object-contain" />
    </div>
  );
}

export { Umbrella };
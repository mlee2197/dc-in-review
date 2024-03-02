import Image from "next/image";

export const Beaker = () => {
  return (
    <div className="beaker relative w-[20%] aspect-[1/2]">
      <Image src="/images/spy/target.svg" alt="target" fill className="object-cover scale-50" />
    </div>
  );
}

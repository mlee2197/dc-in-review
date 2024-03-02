import Image from "next/image";

const Bird = () => {
  return (
    <div className="absolute w-[8%] aspect-square">
      <Image src="/images/monument/bird.svg" alt="bird" fill className="bird object-contain" />
    </div>
  );
}

export { Bird };
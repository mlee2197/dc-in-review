import Image from "next/image";

const Suitcase = () => {
  return (
    <div className="absolute w-[15%] aspect-square">
      <Image src="/images/spy/suitcase.svg" alt="Suitcase" fill className="suitcase object-contain" />
    </div>
  );
}

export { Suitcase };
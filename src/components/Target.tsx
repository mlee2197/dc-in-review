import Image from "next/image";

const Target = () => {
  return (
    <div className="relative w-[20%] aspect-square">
      <Image src="/images/spy/target.svg" alt="target" fill className="target object-cover scale-50" />
    </div>
  );
}

export { Target };
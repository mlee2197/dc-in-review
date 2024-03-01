import Image from "next/image";

const Bullet = () => {
  return (
    <div className="absolute w-[20%] aspect-[1/2]">
      <Image src="/images/spy/bullet.svg" alt="Bullet" fill className="bullet object-contain" />
    </div>
  );
}

export { Bullet };
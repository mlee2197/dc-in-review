import Image from "next/image";

const Bullet = () => {
  return (
    <div className="bullet absolute w-[20%] aspect-[1/2]">
      <Image src="/images/spy/bullet.svg" alt="Bullet" fill className="object-contain" />
    </div>
  );
}

export { Bullet };
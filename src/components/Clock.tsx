import Image from "next/image";

export const Clock = () => {
  return (
    <div className="clock absolute flex items-center justify-center top-3 left-1/2 -translate-x-1/2 w-[45%] h-[45%]">
      <Image src="/images/escape-room/clock.svg" alt="clock" fill />
      <div className="minute-hand absolute top-[50.5%] left-[49%] w-[2px] h-1/4 bg-white rounded-full origin-top" />
      <div className="hour-hand absolute top-[50.5%] left-[49%] w-[2px] h-1/6 bg-white rounded-full origin-top" />
    </div>
  );
};

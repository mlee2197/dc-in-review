import clsx from "clsx";

interface GondolaProps {
  topPercent?: number;
  bottomPercent?: number;
  leftPercent?: number;
  rightPercent?: number;
}

const Gondola = ({
  topPercent,
  bottomPercent,
  leftPercent,
  rightPercent,
}: GondolaProps) => {
  return (
    <div
      className={clsx(
        "absolute w-1/5 h-1/5 grid grid-rows-[2fr_5fr_3fr] ",
        "animate-[spin_45s_linear_infinite_reverse]"
      )}
      style={{
        top: topPercent !== undefined ? `${topPercent}%` : undefined,
        bottom: bottomPercent !== undefined ? `${bottomPercent}%` : undefined,
        left: leftPercent !== undefined ? `${leftPercent}%` : undefined,
        right: rightPercent !== undefined ? `${rightPercent}%` : undefined,
      }}
    >
      <div className="w-full rounded-t-[80px] bg-white"></div>
      <div className="w-full border-b-0 mx-auto bg-white opacity-50"></div>
      <div className="w-full rounded-b-xl bg-white"></div>
    </div>
  );
};

export { Gondola };

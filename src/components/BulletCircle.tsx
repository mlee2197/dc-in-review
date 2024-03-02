import { Bullet } from "./Bullet";

interface BulletCircleProps {
  yOffset: number;
  xOffset: number;
}

const BulletCircle = ({ xOffset, yOffset }: BulletCircleProps) => {
  return (
    <div
      className="flex items-end justify-center absolute w-[20%] aspect-square"
      style={{ translate: `${xOffset}% ${yOffset - 8}%` }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <Bullet key={`bullet-${i}`} />
      ))}
    </div>
  );
};

export { BulletCircle };

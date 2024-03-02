import Image from "next/image";

interface CandleProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const FLAME_SIZE_MAP = {
  small: { width: 15, height: 30 },
  medium: { width: 18, height: 36 },
  large: { width: 20, height: 40 },
};

const CANDLE_SIZE_MAP = {
  small: { width: 40, height: 80 },
  medium: { width: 50, height: 100 },
  large: { width: 60, height: 120 },
};

export const Candle = ({ className, size = "medium" }: CandleProps) => {
  return (
    <div className={"candle" + " " + className}>
      <Image
        src="/images/escape-room/flame.svg"
        alt="candle flame"
        width={FLAME_SIZE_MAP[size].width}
        height={FLAME_SIZE_MAP[size].height}
        className="flame object-contain mx-auto -mb-2 opacity-0 origin-bottom"
      />
      <Image
        src="/images/escape-room/candle.svg"
        alt="candle"
        width={CANDLE_SIZE_MAP[size].width}
        height={CANDLE_SIZE_MAP[size].height}
        className="object-contain"
      />
    </div>
  );
};

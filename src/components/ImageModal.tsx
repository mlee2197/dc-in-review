import Image from "next/image";

export const ImageModal = ({
  url,
  onClick,
}: {
  url: string;
  onClick: () => void;
}) => {
  return (
    <div className="fixed w-screen h-screen p-6 bg-black bg-opacity-50 md:p-8">
      <Image
        src={url}
        alt="Snapshot from DC in Review"
        layout="fill"
        objectFit="contain"
        onClick={onClick}
      />
    </div>
  );
};

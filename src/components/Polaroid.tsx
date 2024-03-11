import { imageUrlWithTransformation } from "@/services/cloudinary";
import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

export const Polaroid = ({ url }: { url: string }) => {
  return (
    <>
      <div className="relative w-[90vw] aspect-square rounded-md border-[20px] border-b-[64px] border-white bg-black md:w-64 md:h-64">
        <Image
          src={imageUrlWithTransformation(url)}
          alt="Snapshot from DC in Review"
          fill
          objectFit="contain"
          // onClick={() => setOpen(true)}
        />
      </div>
      {/* {open && <ImageModal url={url} onClick={() => setOpen(false)} />} */}
      {/* {open && (
        <div className="fixed w-screen h-screen p-6 bg-black bg-opacity-50 md:p-8">
          <Image
            src={url}
            alt="Snapshot from DC in Review"
            layout="fill"
            objectFit="contain"
            onClick={() => setOpen(false)}
          />
        </div>
      )} */}
    </>
  );
};

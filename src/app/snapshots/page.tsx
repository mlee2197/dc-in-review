import { Polaroid } from "@/components/Polaroid";
import { getImages } from "@/services/cloudinary";

export default async function SnapshotsPage() {
  const data: any = await getImages();
  return (
    <div className="relative max-w-screen min-h-screen p-6 overflow-hidden bg-blue-400 md:p-8">
      <h1 className="text-center text-4xl">Snapshots</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {data?.resources &&
          data.resources.map((image: any) => (
            <Polaroid key={image.public_id} url={image.secure_url} />
          ))}
      </div>
    </div>
  );
}

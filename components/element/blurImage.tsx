import Image from "next/image";
import { useState } from "react";

const BlurImage = ({ gambar }: { gambar: string }) => {
  function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Image
        src={gambar}
        fill
        sizes="100%"
        alt="Gambar Kategori"
        className={cn(
          'object-cover w-full h-auto aspect-video rounded-xl bg-kuning" duration-700 ease-in-out',
          isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
        )}
        onLoad={() => setIsLoading(false)}
      />
      {/* <Image
        src={gambar}
        width={500}
        height={500}
        blurDataURL="/menublur.png"
        placeholder="blur"
        alt="Gambar Kategori"
        className="absolute object-cover w-full border-2 border-black z-1 aspect-video rounded-xl bg-kuning"
        onLoadingComplete={() => setIsLoading(false)}
      /> */}
    </>
  );
};

export default BlurImage;

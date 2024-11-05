import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  alt: string;
  description: string;
}

export function StudyCard({ title, image, description, alt }: Props) {
  return (
    <div className="flex flex-col gap-4 self-stretch ">
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <div
        className="w-full h-[230px] sm:h-[300px] lg:h-[400px] rounded-[10px]"
        style={{
          background: `url(${image.src}) lightgray 50% / cover no-repeat`,
        }}
      >
        <Image
          src={image}
          alt={alt}
          quality={100}
          className="w-full h-full rounded-[10px] opacity-0"
        />
      </div>
      <CardContent className="text-sm p-0 overflow-hidden text-ellipsis}">
        {description}
      </CardContent>
    </div>
  );
}

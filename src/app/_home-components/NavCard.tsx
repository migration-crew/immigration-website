import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


type Props = {
  alt: string;
  src: StaticImageData;
  title: string;
  text: string;
  href: string
};

export const NavCard = ({ alt, src, title, text, href }: Props) => {
  return (
    <Link href={href}>
    <Card className="w-[398px] h-[260px] lg:w-[344px] lg:h-[360px] flex flex-col">
      <CardHeader className="flex-grow p-0 pb-6">
        <div className="relative h-full">
        <Image
          alt={alt}
          src={src}
          layout={"fill"}
          objectFit={"cover"}
          quality={100}
          className="rounded-t-xl"
        />
        <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20 rounded-t-xl">
          <h1 className="text-page-titles-mobile lg:text-heading-mobile font-bold text-primary-white">
            {title}
          </h1>
        </div>
        </div>
      </CardHeader>
      <CardFooter className="h-[90px]">{text}</CardFooter>
    </Card>
    </Link>
  );
};

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  divClassName?: string | undefined;
  imgClassName?: string | undefined;
  children?: React.ReactNode;
};

export const ResponsiveImage = ({
  alt,
  src,
  divClassName,
  imgClassName,
  children,
}: Props) => {
  return (
    <div className={cn("relative", divClassName)}>
      <Image
        alt={alt}
        src={src}
        layout={"fill"}
        objectFit={"cover"}
        quality={100}
        className={imgClassName}
      />
      {children}
    </div>
  );
};

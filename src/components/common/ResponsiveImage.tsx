import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

/**
 * Common Section Container
 * @param alt - explanation of picture
 * @param src - link of picture
 * @param divClassName - pass custom classes to dev (set size of picture)
 * @param imgClassName - pass custom classes to Image (edit Image)
 * @param children - our own components or html elements
 * @example
 * ```tsx
 *  <SectionContainer className="py-[40px] lg:py-[50px]">
      <p>By taking this quiz, you will discover xxx.</p>
    </SectionContainer>
 * ```
 */

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

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/legacy/image";


type Props = {
  alt: string;
  src: StaticImageData;
  divClassName?: string | undefined;
  imgClassName?: string | undefined;
  children?: React.ReactNode;
};

/**
 * Common Section Container
 * @param alt - explanation of picture
 * @param src - link of picture
 * @param divClassName - pass custom classes to dev (set size of picture)
 * @param imgClassName - pass custom classes to Image (edit Image)
 * @param children - our own components or html elements
 * @example
 * ```tsx
 *  <ResponsiveImage
          alt="Larissa"
          src={Larissa}
          divClassName="w-[398px] h-[316px]"
          imgClassName="rounded-3xl"
        >
          <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20 rounded-t-xl">
            <h1 className="text-page-titles-mobile xl:text-heading-mobile font-bold text-primary-white">
              Larissa
            </h1>
          </div>
        </ResponsiveImage>
 * ```
 */
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
        className={cn(imgClassName)}
      />
      {children}
    </div>
  );
};

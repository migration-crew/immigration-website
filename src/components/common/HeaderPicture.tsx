import Image, { StaticImageData } from "next/image";
import { Hero } from "./text/Hero";


type Props = {
  alt: string;
  src: StaticImageData;
  title: string;
};

/**
 * Header Picture
 * @param alt - explanation of picture
 * @param src - link of picture
 * @param title - page title
 * @example
 * ```tsx
 * import about from "@/public/about.jpeg";
  ...
 *  <HeaderPicture alt="about us" src={about} title="About us" />
 * ```
 */
export const HeaderPicture = ({ alt, src, title }: Props) => {
  return (
    <section className="relative min-h-[218px] md:min-h-[360px]">
      <Image
        alt={alt}
        src={src}
        layout={"fill"}
        objectFit={"cover"}
        quality={100}
      />
      <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20">
        <Hero className="text-primary-white">{title}</Hero>
      </div>
    </section>
  );
};

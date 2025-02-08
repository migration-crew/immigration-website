import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { Title } from "./text/Title";

type Props = {
  alt: string;
  src: StaticImageData;
  title: string;
  className?: string | undefined;
};

/**
 * Header Picture
 * @param alt - explanation of picture
 * @param src - link of picture
 * @param title - page title
 * @param className - adjust center of picture e.g. "object-[50%,20%]" recomment %. only change second one.
 * @example
 * ```tsx
 * import about from "@/public/about.jpeg";
  ...
 *  <HeaderPicture alt="about us" src={about} title="About us" className="object-[0%,20%]" />
 * ```
 */
export const HeaderPicture = ({ alt, src, title, className }: Props) => {
  return (
    <section className="relative h-[218px] xl:h-[360px]">
      <Image
        alt={alt}
        src={src}
        fill
        style={{ objectFit: "cover" }}
        sizes="auto"
        quality={50}
        priority
        className={cn(className)}
      />

      <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20">
        <Title className="text-primary-white">{title}</Title>
      </div>
    </section>
  );
};

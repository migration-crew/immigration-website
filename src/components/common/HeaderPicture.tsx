import Image, { StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  title: string;
};

export const HeaderPicture = ({ alt, src, title }: Props) => {
  return (
    <section className="relative min-h-[218px] md:min-h-[360px]">
      <Image alt={alt} src={src} layout={"fill"} objectFit={"cover"} quality={100} />
      <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20">
        <h1 className="text-[36px] md:text-[48px] font-bold text-primary-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

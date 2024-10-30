import Image, { StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  title: string;
};

export const HeaderPicture = ({ alt, src, title }: Props) => {
  return (
    <section className="relative min-h-[508px] md:min-h-[624px]">
      <Image alt={alt} src={src} layout={"fill"} objectFit={"cover"} />
      <div className="absolute w-full h-full grid place-content-center bg-gray-400 bg-opacity-50">
        <h1 className="text-[36px] md:text-[48px] font-bold text-primary-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

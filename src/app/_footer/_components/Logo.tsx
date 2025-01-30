import logoWhite from "@/public/logoWhite.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center">
      <Image
        src={logoWhite}
        alt="logo image"
        quality={100}
        width={200}
        height={100}
        priority
        //   className="w-36 lg:w-56 lg:h-32"
      />
    </div>
  );
}

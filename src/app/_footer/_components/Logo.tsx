import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import logoWhite from "@/public/logoWhite.png";

export default function Logo() {
  return (
    <ResponsiveImage
      alt="logo image"
      src={logoWhite}
      divClassName="flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center w-[200px] h-[100px]"
    />
  );
}

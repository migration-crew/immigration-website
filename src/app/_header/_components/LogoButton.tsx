import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function LogoButton() {
  return (
    <Link href="/" className="h-full">
      <ResponsiveImage src={logo} alt="logo image" divClassName="w-32 h-full" />
    </Link>
  );
}

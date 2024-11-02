import Image from "next/image";
import workImage from "../../../public/work.png";

export function ContactForm() {
  return (
    <div className="">
      <Image
        src={workImage}
        alt="Background image of work page"
        quality={100}
        priority
        className="w-full"
      />
    </div>
  );
}

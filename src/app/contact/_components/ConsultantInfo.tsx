import Image from "next/image";
import workImage from "../../../public/work.jpeg";

export function ConsultantInfo() {
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

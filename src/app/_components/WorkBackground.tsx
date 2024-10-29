import Image from "next/image";
import workImage from "../../public/work.png";

export function WorkBackground() {
  return (
    <div className="">
      <Image
        src={workImage}
        alt="Background image of work page"
        quality={100}
        priority
      />
    </div>
  );
}

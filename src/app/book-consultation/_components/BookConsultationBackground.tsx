import Image from "next/image";
import BookConsultationImage from "../../../public/book-consultation.jpeg";

export function BookConsultationBackground() {
  return (
    <div className="">
      <Image
        src={BookConsultationImage}
        alt="Background image of book consultation page"
        quality={100}
        priority
        className="w-full"
      />
    </div>
  );
}

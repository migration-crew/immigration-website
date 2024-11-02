import Consultant from "@/public/Consultant.png";
import Image from "next/image";

export function ConsultantInfo() {
  return (
    <div className="flex my-14">
      <Image alt="contact us" src={Consultant} className="" />
      <div className="ml-2 w-3/4 items-center">
        <h1 className="mb-6">How Can We Help You Today?</h1>
        <h2>Larissa Castelluber</h2>
        <p>
          Hi there,
          <br />
          I'm Larissa Castelluber, and I'm dedicated to helping you achieve your
          Canadian dream. I understand the challenges of the immigration process
          and am here to provide you with the support and guidance you need.
          Let's make your journey to Canada a successful and fulfilling one!
        </p>
      </div>
    </div>
  );
}

import { Heading } from "@/components/common/text/Heading";
import { OtherButton } from "@/components/common/text/OtherButton";
import { SubHeading } from "@/components/common/text/SubHeading";
import { Card } from "@/components/ui/card";
import consultant from "@/public/consultant.png";
import Image from "next/image";

export function ConsultantInfo() {
  return (
    <div className="xl:flex my-14 xl:items-center">
      <div className="xl:w-2/5">
        <Image
          alt="contact us"
          src={consultant}
          layout="responsive"
          objectFit="cover"
          width={482}
          height={642}
          className="rounded-2xl w-full max-h-[350px] xl:max-h-[500px]"
        />
      </div>
      <div className="space-y-7 xl:ml-7 xl:w-3/5 xl:flex xl:flex-col xl:space-y-10">
        <Heading className="mt-7">How Can We Help You Today?</Heading>
        <div className="xl:flex xl:flex-col space-y-4">
          <SubHeading className="text-primary-red">
            Larissa Castelluber
          </SubHeading>
          <OtherButton>
            Hi there, <br />
            I'm Larissa Castelluber, and I'm dedicated to helping you achieve your
            Canadian dream. I understand the challenges of the immigration process
            and am here to provide you with the support and guidance you need.
            Let's make your journey to Canada a successful and fulfilling one!
          </OtherButton>
        </div>
      </div>
    </div>
  );
}

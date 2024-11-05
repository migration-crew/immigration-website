import { ResponsiveImage } from "@/components/common/ResponsiveImage";
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
        <ResponsiveImage alt="consultant" src={consultant} divClassName="w-[350px] h-[340px] xl:w-[420px] xl:h-[600px]" imgClassName="rounded-2xl"/>
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

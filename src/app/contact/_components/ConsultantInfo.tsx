import { Heading } from "@/components/common/text/Heading";
import { OtherButton } from "@/components/common/text/OtherButton";
import { SubHeading } from "@/components/common/text/SubHeading";
import { Card } from "@/components/ui/card";
import Consultant from "@/public/Consultant.png";
import Image from "next/image";

export function ConsultantInfo() {
  return (
    <div className="flex my-14">
      <Card>
        <Image
          alt="contact us"
          src={Consultant}
          className="rounded-md"
          layout="fill"
        />
      </Card>
      <div className="ml-4 w-3/4 pt-44">
        <Heading>How Can We Help You Today?</Heading>
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
  );
}

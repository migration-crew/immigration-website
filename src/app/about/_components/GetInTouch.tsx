import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { Button } from "@/components/ui/UpImmigrationButton";
import Link from "next/link";

export const GetInTouch = () => {
  return (
    <SectionContainer className="py-10 xl:pb-[100px]">
      <Heading>Get in touch</Heading>
      <Paragraph className="py-4 xl:pt-5">
        We are eager to assist you in realizing your immigration dreams in
        Canada. Contact us today and take the first step towards a new journey.
      </Paragraph>
      <Button className="w-full xl:w-fit py-3 px-4">
        <Link href="/book-consultation">Book a free consultation</Link>
      </Button>
    </SectionContainer>
  );
};

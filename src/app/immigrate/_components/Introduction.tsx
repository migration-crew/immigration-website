import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";

export const Introduction = () => {
  return (
    <SectionContainer className="py-10">
      <Heading>Do you want to immigrate to Canada?</Heading>
      {/* The font sinze from mobile is 20px, however Im using Heading component which uses 24px */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 py-4">
        <Paragraph className=" text-justify w-[100%]">
          Canada is a top destination for individuals and families seeking new
          opportunities. With over 80 immigration programs available, including
          options for skilled workers, Labour Market Impact Assessments (LMIA),
          Provincial Nominee Programs (PNP), and family reunification, there are
          numerous pathways to becoming a permanent resident.
        </Paragraph>

        <Paragraph className=" text-justify w-[100%]">
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </Paragraph>
      </div>
      <BookFreeConsultation />
    </SectionContainer>
  );
};

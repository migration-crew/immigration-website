import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";

export function WorkInCanada() {
  return (
    <SectionContainer className="flex flex-col gap-4">
      <Heading className="text-xl font-bold">How to work in Canada?</Heading>
      <Paragraph>
        Over 400,000 international workers come to Canada each year, playing a
        crucial role in the country&apos;s economy and diversity. Canada offers
        numerous opportunities for skilled workers seeking to advance their
        careers and gain international experience. Whether you&apos;re looking
        for temporary work or a permanent move, understanding your options is
        the first step toward working in Canada.
      </Paragraph>
      <Paragraph>
        Our team at Up Immigration is here to guide you through the process,
        helping you find the program that best suits your needs for a successful
        transition to your new life in Canada. Contact us today to start your
        journey to Canada with confidence.
      </Paragraph>
      <BookFreeConsultation />
    </SectionContainer>
  );
}

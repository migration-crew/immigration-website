import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";

export function StudyInCanada() {
  return (
    <SectionContainer className="flex flex-col gap-4 xl:gap-8">
      <Heading className="">Why study in Canada?</Heading>
      <Paragraph className="">
        Canada offers world-class education, diverse cultural experiences, and
        potential pathways to permanent residency. International students choose
        Canada for its top-ranked institutions and the opportunity to work
        during and after their studies, making it an ideal destination for
        higher education.
      </Paragraph>
      <BookFreeConsultation className="xl:w-fit" />
    </SectionContainer>
  );
}

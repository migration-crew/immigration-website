import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";

export function StudyInCanada() {
  return (
    <SectionContainer className="flex flex-col gap-4">
      <h2 className="text-xl font-bold ">Why study in Canada?</h2>
      <p>
        Canada offers world-class education, diverse cultural experiences, and
        potential pathways to permanent residency. International students choose
        Canada for its top-ranked institutions and the opportunity to work
        during and after their studies, making it an ideal destination for
        higher education.
      </p>
      <BookFreeConsultation />
    </SectionContainer>
  );
}

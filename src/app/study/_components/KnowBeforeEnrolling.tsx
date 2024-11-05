import { SectionContainer } from "@/components/common/SectionContainer";
import { StudyCardList } from "./StudyCardList";

export function KnowBeforeEnrolling() {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">
        All you have to know before enrolling to study in Canada
      </h2>
      <StudyCardList />
    </SectionContainer>
  );
}

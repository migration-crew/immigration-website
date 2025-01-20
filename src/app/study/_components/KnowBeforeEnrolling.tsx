import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { StudyCardList } from "./StudyCardList";

export function KnowBeforeEnrolling() {
  return (
    <SectionContainer className="flex flex-col gap-6">
      <Heading className="">
        All you have to know before enrolling to study in Canada
      </Heading>
      <StudyCardList />
    </SectionContainer>
  );
}

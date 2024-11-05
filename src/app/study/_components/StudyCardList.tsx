import { SectionContainer } from "@/components/common/SectionContainer";
import { studyCardItems } from "@/data/studyCardItems";
import { StudyCard } from "./StudyCardItem";

export function StudyCardList() {
  return (
    <SectionContainer className="flex flex-col gap-6 xl:grid xl:grid-cols-2">
      {studyCardItems.map((item) => (
        <StudyCard key={item.title} {...item} />
      ))}
    </SectionContainer>
  );
}

import { HeaderPicture } from "@/components/common/HeaderPicture";
import studyImage from "@/public/study.jpeg";
import { KnowBeforeEnrolling } from "./_components/KnowBeforeEnrolling";
import { StudyInCanada } from "./_components/StudyInCanada";

export default function StudyPage() {
  return (
    <div className="flex flex-col h-full gap-10">
      <HeaderPicture
        alt="Image of study page"
        src={studyImage}
        title={"Study"}
      />
      <StudyInCanada />
      <KnowBeforeEnrolling />
    </div>
  );
}

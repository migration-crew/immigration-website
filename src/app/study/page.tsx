import { HeaderPicture } from "@/components/common/HeaderPicture";
import studyImage from "@/public/study.jpeg";

export default function StudyPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <HeaderPicture
        alt="Image of study page"
        src={studyImage}
        title={"Study"}
      />
    </div>
  );
}

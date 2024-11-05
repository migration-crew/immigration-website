import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Book, FolderCheck, Trophy } from "lucide-react";

import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { Caption } from "@/components/common/text/Caption";
import { Paragraph } from "@/components/common/text/Paragraph";
import Language from "@/public/languageIcon.svg";
import { Strength } from "./Strength";

export const WhyChooseUs = () => {
  return (
    <SectionContainer className="py-[50px]">
      <Heading>Why choose us</Heading>
      <div className="pt-[96px] grid grid-cols-2 gap-7 xl:grid-cols-4">
        <Strength
          icon={<Trophy size={70} />}
          num="+908"
          text="Successful cases"
        />
        <Strength
          icon={<FolderCheck size={70} />}
          num="98%"
          text="Approved rate"
        />
        <div className="text-center">
          <div className="pb-12 flex justify-center">
            <ResponsiveImage
              alt="Languate"
              src={Language}
              divClassName="h-[70px] w-[70px]"
            />
          </div>
          <div>
            <Heading className="text-primary-red">3</Heading>
            <Paragraph>Languages</Paragraph>
            <Caption className="font-normal xl:font-normal">
              English/ Portuguese/ Spanish
            </Caption>
          </div>
        </div>
        <Strength
          icon={<Book size={70} />}
          num="20"
          text="Years of experience"
        />
      </div>
    </SectionContainer>
  );
};

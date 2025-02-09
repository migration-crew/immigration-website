import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Caption } from "@/components/common/text/Caption";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import Language from "@/public/languageIcon.svg";
import { Book, FolderCheck, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import { Strength } from "./Strength";

export const WhyChooseUs = () => {
  const t = useTranslations("Home");

  return (
    <SectionContainer className="py-[50px]">
      <Heading>{t("whyChooseUsTitle")}</Heading>
      <div className="pt-[96px] grid grid-cols-2 gap-7 xl:grid-cols-4">
        <Strength
          icon={<Trophy size={70} />}
          num="+908"
          text={t("successfulCases")}
        />
        <Strength
          icon={<FolderCheck size={70} />}
          num="98%"
          text={t("approvedRate")}
        />
        <div className="text-center">
          <div className="pb-7 flex justify-center">
            <ResponsiveImage
              alt="Language"
              src={Language}
              divClassName="h-[90px] w-[90px]"
            />
          </div>
          <div>
            <Heading className="text-primary-red">3</Heading>
            <Paragraph>{t("languagesTitle")}</Paragraph>
            <Caption className="font-normal xl:font-normal">
              {t("languagesOptions")}
            </Caption>
          </div>
        </div>
        <Strength
          icon={<Book size={70} />}
          num="20"
          text={t("yearsExperience")}
        />
      </div>
    </SectionContainer>
  );
};

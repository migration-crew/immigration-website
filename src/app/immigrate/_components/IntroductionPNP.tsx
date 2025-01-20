import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import { useTranslations } from "next-intl";

export const IntroductionPNP = () => {
  const t = useTranslations("IntroductionPNP");
  return (
    <>
      <SectionContainer>
        <Heading className="py-10">{t("heading")}</Heading>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">{t("subheading1")}</SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
          <Paragraph className="pt-4 text-justify">{t("paragraph1")}</Paragraph>
        </SectionContainer>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">{t("subheading2")}</SubHeading>
          <Paragraph className="pt-4 text-justify">{t("paragraph2")}</Paragraph>
        </SectionContainer>
      </SectionContainer>
    </>
  );
};

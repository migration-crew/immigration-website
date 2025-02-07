import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import EEProgramsImage from "@/public/EEPrograms.jpg";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";

export const EEPrograms = () => {
  const t = useTranslations("EEPrograms");
  return (
    <>
      <SectionContainer className="py-10">
        <Image
          className="pt-10 pb-10 rounded-xl"
          src={EEProgramsImage}
          alt="Express Entry"
          width={1200}
          height={800}
        />
      </SectionContainer>

      <SectionContainer className="pb-[26px]">
        <Heading className="pb-3">{t("heading")}</Heading>

        <Paragraph className="pt-4">{t("subheading")}</Paragraph>
      </SectionContainer>

      <SectionContainer className="pb-[26px]">
        <SubHeading>{t("subheading1")}</SubHeading>
        <Paragraph className="pt-4">{t("paragraph1")}</Paragraph>
      </SectionContainer>
      <SectionContainer className="pb-[26px]">
        <SubHeading>{t("subheading2")}</SubHeading>
        <Paragraph className="pt-4">{t("paragraph2")}</Paragraph>
      </SectionContainer>
      <SectionContainer className="pb-[26px]">
        <SubHeading>{t("subheading3")}</SubHeading>
        <Paragraph className="pt-4">{t("paragraph3")}</Paragraph>
      </SectionContainer>
      <SectionContainer>
        <SubHeading>{t("subheading4")}</SubHeading>
        <Paragraph className="pt-4">{t("paragraph4")}</Paragraph>
      </SectionContainer>

      <SectionContainer>
        <div className="text-center py-10">
          <BookFreeConsultation />
        </div>
      </SectionContainer>
    </>
  );
};

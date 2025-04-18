import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import howEEworks from "@/public/howEEworks.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const IntroductionEE = () => {
  const t = useTranslations("IntroductionExpressEntry");
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
          <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
          <Paragraph className="pt-4 text-justify">{t("paragraph2")}</Paragraph>
        </SectionContainer>

        <SectionContainer className="pb-10">
          <Image
            className="rounded-xl"
            src={howEEworks}
            alt={t("imageAlt")}
            width={1200}
            height={800}
          />
        </SectionContainer>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">{t("subheading3")}</SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
          <Paragraph className="pt-4 text-justify">{t("paragraph3")}</Paragraph>
        </SectionContainer>
      </SectionContainer>
    </>
  );
};

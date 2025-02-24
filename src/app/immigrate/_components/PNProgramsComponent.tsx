import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import { PNPFAQs } from "@/data/FAQData";
import PNPrograms from "@/public/Provincial-Nominee-Programs.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const PNProgramsComponent = () => {
  const t = useTranslations("ProvincesAndTerritories");
  return (
    <>
      <SectionContainer>
        <Heading>{t("headingPNP")}</Heading>
        <div className="my-8 rounded-xl">
          <Image
            className="rounded-xl"
            src={PNPrograms}
            alt={t("headingPNP")}
            width={1200}
            height={700}
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        {PNPFAQs().map((pnpfaq) => (
          <div key={pnpfaq.question}>
            <SubHeading>{pnpfaq.question}</SubHeading>
            <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
            <Paragraph className="mb-6 text-justify">{pnpfaq.answer}</Paragraph>
          </div>
        ))}
      </SectionContainer>

      <SectionContainer className="py-16">
        <Heading>{t("heading1")}</Heading>

        <SubHeading className="pt-8">{t("subheading1")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph1")}</Paragraph>

        <SubHeading className="pt-8">{t("subheading1a")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph1a")}</Paragraph>
      </SectionContainer>

      <SectionContainer className="pb-16">
        <Heading>{t("heading2")}</Heading>

        <SubHeading className="pt-8">{t("subheading2")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph2")}</Paragraph>

        <SubHeading className="pt-8">{t("subheading2a")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph2a")}</Paragraph>

        <SubHeading className="pt-8">{t("subheading2b")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph2b")}</Paragraph>
      </SectionContainer>

      <SectionContainer className="mb-10">
        <Heading>{t("heading3")}</Heading>

        <SubHeading className="pt-8">{t("subheading3")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph3")}</Paragraph>

        <SubHeading className="pt-8">{t("subheading3a")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph3a")}</Paragraph>

        <SubHeading className="pt-8">{t("subheading3b")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph3b")}</Paragraph>

        <SubHeading className="pt-8">{t("subheading3c")}</SubHeading>
        <div className="bg-primary-red w-[50px] h-[2.5px] mt-3 mb-4"></div>
        <Paragraph className="text-justify">{t("paragraph3c")}</Paragraph>
      </SectionContainer>
    </>
  );
};

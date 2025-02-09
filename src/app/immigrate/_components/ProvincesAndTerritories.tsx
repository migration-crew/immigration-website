import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { HeavySubHeader } from "@/components/common/text/HeavySubHeader";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import Provinces from "@/public/Provinces-and-Territories.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PNPPrograms } from "../content/pnpPrograms";

export const ProvincesAndTerritories = () => {
  const t = useTranslations("ProvincesAndTerritories");
  return (
    <>
      <SectionContainer className="mb-6 py-16">
        <SectionContainer>
          <Heading>{t("heading")}</Heading>
          <Image
            src={Provinces}
            alt={t("heading")}
            width={1200}
            height={1000}
          />
        </SectionContainer>

        <SectionContainer>
          <SubHeading className="pt-10 pb-3">{t("subheading")}</SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px] mb-8"></div>
          {PNPPrograms().map((program) => (
            <div key={program.title}>
              <HeavySubHeader className="mb-6">{program.title}</HeavySubHeader>
              <Paragraph className="mb-6 text-justify">
                {program.description}
              </Paragraph>
            </div>
          ))}
        </SectionContainer>
      </SectionContainer>
    </>
  );
};

import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { HeavySubHeader } from "@/components/common/text/HeavySubHeader";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import Provinces from "@/public/Provinces-and-Territories.jpg";
import Image from "next/image";
import { PNPPrograms } from "../content/pnpPrograms";

export const ProvincesAndTerritories = () => {
  return (
    <>
      <SectionContainer className="mb-6 py-16">
        <SectionContainer>
          <Heading>Provinces and Territories</Heading>
          <Image
            src={Provinces}
            alt="Provincial Nominee Programs by Province"
            width={1200}
            height={400}
          />
        </SectionContainer>

        <SectionContainer>
          <SubHeading className="pt-10 pb-3">
            Provincial Nominee Programs by Province
          </SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px] mb-8"></div>
          {PNPPrograms.map((program) => (
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

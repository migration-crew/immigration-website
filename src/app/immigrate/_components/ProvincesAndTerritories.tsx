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
      <SectionContainer className="py-16">
        <SectionContainer>
          <Heading className="mb-6">Provinces and Territories</Heading>
          <Image
            src={Provinces}
            alt="Provincial Nominee Programs by Province"
            width={1200}
            height={400}
          />
        </SectionContainer>

        <SectionContainer>
          <SubHeading className="mb-8 pt-10">
            Provincial Nominee Programs by Province
          </SubHeading>
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

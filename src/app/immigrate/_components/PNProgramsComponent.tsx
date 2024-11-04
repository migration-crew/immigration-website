import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import PNPrograms from "@/public/Provincial-Nominee-Programs.jpg";
import Image from "next/image";
import { PNPFAQs } from "../content/faqs";

export const PNProgramsComponent = () => {
  return (
    <>
      <SectionContainer>
        <Heading>Provincial Nominee Programs</Heading>
        <div className="py-8">
          <Image
            src={PNPrograms}
            alt="Provincial Nominee Programs"
            width={1200}
            height={400}
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        {PNPFAQs.map((pnpfaq) => (
          <div key={pnpfaq.question}>
            <SubHeading className="mb-6">{pnpfaq.question}</SubHeading>
            <Paragraph className="mb-6 text-justify">{pnpfaq.answer}</Paragraph>
          </div>
        ))}
      </SectionContainer>

      <SectionContainer className="py-16">
        <Heading>Cost and Processing Time</Heading>

        <SubHeading className="pt-8">
          How Much Does it Cost to Immigrate through a PNP?
        </SubHeading>
        <Paragraph className="text-justify">
          Costs vary by province and include application fees for both the
          provincial nomination and the federal permanent residence application.
          Fees can range from a few hundred to over a thousand dollars.
        </Paragraph>

        <SubHeading className="pt-8">
          What is the Processing Time for a PNP Application?
        </SubHeading>
        <Paragraph className="text-justify">
          Processing times vary by province and stream but generally range from
          a few months to over a year.
        </Paragraph>
      </SectionContainer>

      <SectionContainer className="pb-16">
        <Heading>Increasing Your Chances of Receiving a Nomination</Heading>

        <SubHeading className="pt-8">
          What is the Ideal PNP Candidate?
        </SubHeading>
        <Paragraph className="text-justify">
          The ideal candidate varies by province but generally includes
          individuals with high education, relevant work experience, strong
          language skills, and ties to the province.
        </Paragraph>

        <SubHeading className="pt-8">
          Do I Need an ECA Report for PNPs?
        </SubHeading>
        <Paragraph className="text-justify">
          Most PNPs require an Educational Credential Assessment (ECA) to verify
          that your foreign education is equivalent to a Canadian credential.
        </Paragraph>

        <SubHeading className="pt-8">
          How Can I Increase My Chances of Receiving a Nomination?
        </SubHeading>
        <Paragraph className="text-justify">
          How Can I Increase My Chances of Receiving a Nomination?
        </Paragraph>
      </SectionContainer>

      <SectionContainer className="mb-10">
        <Heading>Special PNP Categories</Heading>

        <SubHeading className="pt-8">
          Canadian PNPs for Healthcare Professionals
        </SubHeading>
        <Paragraph className="text-justify">
          Several provinces have streams dedicated to attracting healthcare
          professionals to address labor shortages in the healthcare sector.
        </Paragraph>

        <SubHeading className="pt-8">
          Canadian PNPs for International Students
        </SubHeading>
        <Paragraph className="text-justify">
          Many provinces have streams that facilitate the transition from
          international student to permanent resident, focusing on graduates
          from designated learning institutions.
        </Paragraph>

        <SubHeading className="pt-8">
          Canadian PNPs for IT Professionals
        </SubHeading>
        <Paragraph className="text-justify">
          Provinces with strong tech industries, such as Ontario and British
          Columbia, have streams specifically for IT professionals.
        </Paragraph>

        <SubHeading className="pt-8">
          Canadian PNPs for Entrepreneurs
        </SubHeading>
        <Paragraph className="text-justify">
          Entrepreneurial streams are available in several provinces, targeting
          individuals who can start or invest in businesses in the province.
        </Paragraph>
      </SectionContainer>
    </>
  );
};

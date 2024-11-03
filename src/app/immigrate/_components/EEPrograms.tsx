import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import EEProgramsImage from "@/public/EEPrograms.jpg";
import Image from "next/image";

export const EEPrograms = () => {
  return (
    <>
      <SectionContainer>
        <Image
          className="pt-10 pb-10"
          src={EEProgramsImage}
          alt="Express Entry"
          width={1200}
          height={400}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Federal Immigration Programs Managed by Express Entry</Heading>

        <Paragraph>
          Express Entry operates through an online system that manages
          applications for three federal immigration programs:
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <SubHeading>1. Federal Skilled Worker Program</SubHeading>
        <Paragraph>
          The Federal Skilled Worker Program is for skilled workers who have
          work experience and want to become permanent residents.
        </Paragraph>
      </SectionContainer>
      <SectionContainer>
        <SubHeading>2. Federal Skilled Trades Program</SubHeading>
        <Paragraph>
          The Federal Skilled Trades Program targets skilled tradespeople with
          qualifications in specific trades. This program emphasizes practical
          skills and work experience in trades such as electricians, plumbers,
          and chefs, among others.
        </Paragraph>
      </SectionContainer>
      <SectionContainer>
        <SubHeading>3. Canadian Experience Class</SubHeading>
        <Paragraph>
          The Canadian Experience Class is for individuals who have already
          gained skilled work experience in Canada. This program is ideal for
          temporary foreign workers or international graduates who have
          accumulated significant work experience in Canada and wish to
          transition to permanent residence.
        </Paragraph>
      </SectionContainer>
      <SectionContainer>
        <SubHeading>Who is Eligible for Express Entry?</SubHeading>
        <Paragraph>
          Eligibility for Express Entry depends on several factors including
          age, education, work experience, and language proficiency. Detailed
          criteria are available on our Express Entry Work Experience
          Requirements page.
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <div className="text-center mt-12">
          <BookFreeConsultation />
        </div>
      </SectionContainer>
    </>
  );
};

import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import howEEworks from "@/public/howEEworks.jpg";
import Image from "next/image";

export const IntroductionSelfEmployed = () => {
  return (
    <>
      <SectionContainer>
        <Heading className="py-10">
          Overview of Northern Immigration Program - RNIP
        </Heading>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">How does Express Entry work?</SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
          <Paragraph className="pt-4 text-justify">
            The Express Entry system is the fastest way for skilled workers to
            move to Canada. It uses a points system called the Comprehensive
            Ranking System (CRS) to score candidates based on their age,
            education, work experience, and language skills. The higher your
            score, the better your chances of being invited to apply for
            permanent residence. The system also prioritizes those with job
            offers or provincial nominations, making it easier for them to get
            selected.
          </Paragraph>
        </SectionContainer>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">
            What is the Express Entry System?
          </SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
          <Paragraph className="pt-4 text-justify">
            The Express Entry system is a streamlined immigration process
            designed to manage applications for permanent residence in Canada.
            It facilitates the selection of skilled workers most likely to
            succeed in the Canadian economy. As a Regulated Canadian Immigration
            Consultant (RCIC), Up Immigration provides expert guidance on
            navigating this system.
          </Paragraph>
        </SectionContainer>

        <SectionContainer className="pb-10">
          <Image
            src={howEEworks}
            alt="Express Entry"
            width={1200}
            height={400}
          />
        </SectionContainer>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">How does Express Entry work?</SubHeading>
          <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
          <Paragraph className="pt-4 text-justify">
            The Express Entry system is the fastest way for skilled workers to
            move to Canada. It uses a points system called the Comprehensive
            Ranking System (CRS) to score candidates based on their age,
            education, work experience, and language skills. The higher your
            score, the better your chances of being invited to apply for
            permanent residence. The system also prioritizes those with job
            offers or provincial nominations, making it easier for them to get
            selected.
          </Paragraph>
        </SectionContainer>
      </SectionContainer>
    </>
  );
};

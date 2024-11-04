import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";

export const IntroductionPNP = () => {
  return (
    <>
      <SectionContainer>
        <Heading className="py-10">
          Overview of Provincial Nominee Programs
        </Heading>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">
            What are Provincial Nominee Programs?
          </SubHeading>
          <Paragraph className="pt-4 text-justify">
            The Provincial Nominee Programs (PNPs) allow Canadian provinces and
            territories to nominate individuals who wish to immigrate to Canada
            and settle in a specific province. These programs are designed to
            address the unique labor market needs of each province and
            territory.
          </Paragraph>
        </SectionContainer>

        <SectionContainer className="pb-10">
          <SubHeading className="pb-3">Benefits of PNPs</SubHeading>
          <Paragraph className="pt-4 text-justify">
            The Express Entry system is a streamlined immigration process PNPs
            provide a faster pathway to permanent residency, address specific
            provincial labor market needs, and offer a variety of categories to
            attract skilled workers, entrepreneurs, and international graduates.
          </Paragraph>
        </SectionContainer>
      </SectionContainer>
    </>
  );
};

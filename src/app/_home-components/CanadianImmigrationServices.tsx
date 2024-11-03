import { SectionContainer } from "@/components/common/SectionContainer";
import { NavCard } from "./NavCard";

import immigrate from "@/public/immigrateLink.png";
import work from "@/public/workLink.png";
import study from "@/public/studyLink.png";
import { Heading } from "@/components/common/text/Heading";


export const CanadianImmigrationServices = () => {
  return (
    <SectionContainer className="py-[40px] md:py-[50px]">
      <Heading className="pb-6">Canadian immigration services</Heading>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <NavCard
          alt="immigrate"
          src={immigrate}
          title="Immigrate"
          text="We are here to support your journey moving to Canada permanently."
          href="/immigrate"
        />
        <NavCard
          alt="work"
          src={work}
          title="Work"
          text="To legally work in Canada, most foreign nationals require a work permit."
          href="/work"
        />
        <NavCard
          alt="study"
          src={study}
          title="Study"
          text="A study permit allows international students to study at designated institutions in Canada."
          href="/study"
        />
      </div>
    </SectionContainer>
  );
};

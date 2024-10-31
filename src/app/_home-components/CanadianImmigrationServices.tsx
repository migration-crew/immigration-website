import { SectionContainer } from "@/components/common/SectionContainer";
import { NavCard } from "./NavCard";

import immigrate from "@/public/immigrateLink.png";

export const CanadianImmigrationServices = () => {
  return (
    <SectionContainer className="py-[40px]">
      <h2>Canadian immigration services</h2>
      <div>
        <NavCard
          alt="immigrate"
          src={immigrate}
          title="Immigrate"
          text="We are here to support your journey moving to Canada permanently."
          href="/immigrate"
        />
      </div>
    </SectionContainer>
  );
};

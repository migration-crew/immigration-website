import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Testimonial } from "@/components/common/Testimonial";
import immigratePage from "@/public/immigratePage.png";
import { CardsPrograms } from "./_components/CardsPrograms";
import { Introduction } from "./_components/Introduction";
import { StepsComponent } from "./_components/Steps";
import { FAQs } from "./content/faqs";

export default function ImmigratePage() {
  return (
    <>
      <HeaderPicture
        alt="Immigrate Image"
        src={immigratePage}
        title="Immigrate"
      />

      <Introduction />

      <CardsPrograms />

      <StepsComponent />

      <Testimonial />

      <SectionContainer>
        <FAQ data={FAQs} />
      </SectionContainer>
    </>
  );
}

import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { FAQs } from "@/data/FAQData";
import immigratePage from "@/public/immigratePage.png";
import { testimonialData } from "../../data/testimonials";
import { CardsPrograms } from "./_components/CardsPrograms";
import { Introduction } from "./_components/Introduction";
import { StepsComponent } from "./_components/Steps";

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

      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile testimonials={testimonialData} />

      <SectionContainer>
        <FAQ data={FAQs} />
      </SectionContainer>
    </>
  );
}

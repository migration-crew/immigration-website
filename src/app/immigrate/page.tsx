import { Steps } from "@/app/immigrate/content/steps";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { FAQs } from "@/data/FAQData";
import immigratePage from "@/public/immigratePage.png";
import { ApplicationStepDesktop } from "../../components/common/ApplicationStepDesktop";
import { testimonialData } from "../../data/testimonials";
import { CardsPrograms } from "./_components/CardsPrograms";
import { Introduction } from "./_components/Introduction";

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

      <ApplicationStepDesktop steps={Steps} title="Where to start?" />
      <ApplicationStepMobile steps={Steps} title="Where to start?" circleSpacing={54} height="h-[75px]" />

      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile testimonials={testimonialData} />

      <FAQ data={FAQs} title="Immigration Frequent Questions" />
    </>
  );
}

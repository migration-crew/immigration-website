import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { testimonialData } from "@/data/testimonials";
import { CanadianImmigrationServices } from "./_home-components/CanadianImmigrationServices";
import { OurConsultant } from "./_home-components/OurConsultant";
import { StartQuiz } from "./_home-components/quiz/StartQuiz";
import { Title } from "./_home-components/Title";
import { WhyChooseUs } from "./_home-components/WhyChooseUs";
import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { Steps } from "./immigrate/content/steps";

export default function Home() {
  return (
    <>
      <Title />
      <OurConsultant />
      <CanadianImmigrationServices />
      <StartQuiz />
      <WhyChooseUs />
      <ApplicationStepDesktop title="Where to start?" steps={Steps} />
      <ApplicationStepMobile title="Where to start?" steps={Steps}  circleSpacing={50} height="h-[70px]"/>
      <Testimonial
        testimonials={testimonialData}
        className="pt-[50px] pb-[100px]"
      />
      <TestimonialMobile testimonials={testimonialData} className="py-10" />
    </>
  );
}

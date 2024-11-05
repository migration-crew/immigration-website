import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { testimonialData } from "@/data/testimonials";
import { CanadianImmigrationServices } from "./_home-components/CanadianImmigrationServices";
import { OurConsultant } from "./_home-components/OurConsultant";
import { StartQuiz } from "./_home-components/quiz/StartQuiz";
import { Title } from "./_home-components/Title";
import { WhyChooseUs } from "./_home-components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Title />
      <OurConsultant />
      <CanadianImmigrationServices />
      <StartQuiz />
      <WhyChooseUs />
      <Testimonial
        testimonials={testimonialData}
        className="pt-[50px] pb-[100px]"
      />
      <TestimonialMobile testimonials={testimonialData} className="py-10" />
    </>
  );
}

import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { testimonialData } from "@/data/testimonials";
import { CanadianImmigrationServices } from "./_home-components/CanadianImmigrationServices";
import { OurConsultant } from "./_home-components/OurConsultant";
import { Quiz } from "./_home-components/Quiz";
import { Title } from "./_home-components/Title";

export default function Home() {
  return (
    <>
      <Title />
      <OurConsultant />
      <CanadianImmigrationServices />
      <Quiz />
      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile testimonials={testimonialData} />
    </>
  );
}

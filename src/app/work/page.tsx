import { ApplicationGuide } from "@/components/common/ApplicationGuide";
import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { testimonialData } from "@/data/testimonials";
import workImage from "@/public/work.jpeg";
import { FAQs } from "../immigrate/content/faqs";
import { DiscoverOptions } from "./_components/DiscoverOptions";
import { WorkInCanada } from "./_components/WorkInCanada";

export default function WorkPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <HeaderPicture alt="Image of work page" src={workImage} title={"Work"} />
      <WorkInCanada />
      <DiscoverOptions />
      <ApplicationGuide />
      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile testimonials={testimonialData} />
      <FAQ data={FAQs} />
    </div>
  );
}

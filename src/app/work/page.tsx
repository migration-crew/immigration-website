import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { FAQs } from "@/data/FAQData";
import { testimonialData } from "@/data/testimonials";
import workImage from "@/public/work.jpeg";
import { Steps } from "../immigrate/content/steps";
import { DiscoverOptions } from "./_components/DiscoverOptions";
import { WorkInCanada } from "./_components/WorkInCanada";

export default function WorkPage() {
  return (
    <div className="flex flex-col h-full gap-4 xl:gap-[100px]">
      <HeaderPicture alt="Image of work page" src={workImage} title={"Work"} />
      <WorkInCanada />
      <DiscoverOptions />
      <ApplicationStepMobile steps={Steps} title="Where to start?" />
      <ApplicationStepDesktop steps={Steps} title="Where to Start?" />
      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile
        testimonials={testimonialData}
        optionalText="Explore more of our Google Reviews for top-rated immigration services. "
        reviewsButtonText="Explore Google Reviews"
        buttonClassName="w-full"
      />
      <FAQ
        data={FAQs}
        title="Immigration Frequent Questions"
        bgColor="bg-neutral-secondary-white"
      />
    </div>
  );
}

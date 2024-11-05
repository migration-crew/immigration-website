import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { FAQs } from "@/data/FAQData";
import { testimonialData } from "@/data/testimonials";
import studyImage from "@/public/study.jpeg";
import { Steps } from "../immigrate/content/steps";
import { KnowBeforeEnrolling } from "./_components/KnowBeforeEnrolling";
import { StudyInCanada } from "./_components/StudyInCanada";

export default function StudyPage() {
  return (
    <div className="flex flex-col h-full gap-10">
      <HeaderPicture
        alt="Image of study page"
        src={studyImage}
        title={"Study"}
      />
      <StudyInCanada />
      <KnowBeforeEnrolling />
      <ApplicationStepMobile steps={Steps} title="Where to start?"/>
      <ApplicationStepDesktop steps={Steps} title="Where to Start?" />
      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile testimonials={testimonialData} />
      <FAQ
        data={FAQs}
        title="Immigration Frequent Questions"
        className="bg-neutral-secondary-white w-full"
      />
    </div>
  );
}

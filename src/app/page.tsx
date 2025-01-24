import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { testimonialData } from "@/data/testimonials";
import { useTranslations } from "next-intl";
import { CanadianImmigrationServices } from "./_home-components/CanadianImmigrationServices";
import { OurConsultant } from "./_home-components/OurConsultant";
import { StartQuiz } from "./_home-components/quiz/StartQuiz";
import { Title } from "./_home-components/Title";
import { WhyChooseUs } from "./_home-components/WhyChooseUs";
import { Steps } from "./immigrate/content/steps";

export default function Home() {
  const t = useTranslations("ImmigrationSteps");
  return (
    <>
      <Title />
      <OurConsultant />
      <CanadianImmigrationServices />
      <StartQuiz />
      <WhyChooseUs />
      <ApplicationStepDesktop title={t("stepsHeading")} steps={Steps()} />
      <ApplicationStepMobile
        title={t("stepsHeading")}
        steps={Steps()}
        circleSpacing={50}
        height="h-[70px]"
      />
      <Testimonial
        testimonials={testimonialData}
        className="pt-[50px] pb-[100px]"
      />
      <TestimonialMobile testimonials={testimonialData} className="py-10" />
    </>
  );
}

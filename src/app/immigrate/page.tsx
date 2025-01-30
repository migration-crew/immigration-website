import { Steps } from "@/app/immigrate/content/steps";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { FAQs } from "@/data/FAQData";
import immigratePage from "@/public/immigratePage.png";
import { useTranslations } from "next-intl";
import { ApplicationStepDesktop } from "../../components/common/ApplicationStepDesktop";
import { testimonialData } from "../../data/testimonials";
import { DiscorverOptionsIP } from "./_components/DiscorverOptionsIP";
import { Introduction } from "./_components/Introduction";

export default function ImmigratePage() {
  const t = useTranslations("ImmigrationSteps");
  const tFAQ = useTranslations("FAQs");
  const t2 = useTranslations("IntroductionImmigrate");
  return (
    <>
      <HeaderPicture
        alt={t2("title")}
        src={immigratePage}
        title={t2("title")}
      />

      <Introduction />

      {/* <CardsPrograms /> */}
      <DiscorverOptionsIP />

      <ApplicationStepDesktop steps={Steps()} title={t("stepsHeading")} />
      <ApplicationStepMobile
        steps={Steps()}
        title={t("stepsHeading")}
        circleSpacing={65}
        height="h-[85px]"
      />

      <Testimonial testimonials={testimonialData} />
      <TestimonialMobile testimonials={testimonialData} />

      <FAQ data={FAQs()} title={tFAQ("heading")} />
    </>
  );
}

import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import FAQ from "@/components/common/faq";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import { Testimonial } from "@/components/common/Testimonial";
import TestimonialMobile from "@/components/common/TestimonialMobile";
import { FAQs } from "@/data/FAQData";
import { testimonialData } from "@/data/testimonials";
import workImage from "@/public/work.jpeg";
import { useTranslations } from "next-intl";
import { Steps } from "../immigrate/content/steps";
import { DiscoverOptions } from "./_components/DiscoverOptions";
import { WorkInCanada } from "./_components/WorkInCanada";

export default function WorkPage() {
  const t = useTranslations("ImmigrationEEPrograms");
  const tFAQ = useTranslations("FAQs");
  const tWork = useTranslations('Work');

  return (
      <div className='flex flex-col h-full gap-4 xl:gap-[100px]'>
          <HeaderPicture
              alt='Image of work page'
              src={workImage}
              title={tWork('headerPictureTitle')}
          />
          <WorkInCanada />
          <DiscoverOptions />
          <ApplicationStepMobile
              steps={Steps()}
              title={t('heading')}
              circleSpacing={50}
              height='h-[70px]'
          />
          <ApplicationStepDesktop steps={Steps()} title={t('heading')} />
          <Testimonial testimonials={testimonialData} />
          <TestimonialMobile testimonials={testimonialData} />
          <FAQ
              data={FAQs()}
              title={tFAQ('heading')}
              bgColor='bg-neutral-secondary-white'
          />
      </div>
  );
}

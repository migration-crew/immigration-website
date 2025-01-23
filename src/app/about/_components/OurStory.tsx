import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { useTranslations } from 'next-intl';

export const OurStory = () => {

  const t = useTranslations('AboutUs');

  return (
      <SectionContainer className='py-10 xl:py-[100px]'>
          <Heading>{t('section4Title')}</Heading>
          <Paragraph className='pt-4 pb-3 xl:pb-5'>{t('section4P1')}</Paragraph>
          <div className='rounded-xl w-[398px] h-[225px] xl:w-[1080px] xl:h-[610px] overflow-hidden'>
              <video
                  controls
                  preload='none'
                  poster='/ourStory.png'
                  className='rounded-xl w-full h-fit'
              >
                  <source src='/OurStory.mp4' type='video/mp4' />
              </video>
          </div>
      </SectionContainer>
  );
};

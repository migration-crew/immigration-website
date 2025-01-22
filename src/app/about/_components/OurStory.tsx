import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";

export const OurStory = () => {
  return (
      <SectionContainer className='py-10 xl:py-[100px]'>
          <Heading>Our story</Heading>
          <Paragraph className='pt-4 pb-3 xl:pb-5'>
              Up Immigration was born out of the desire to simplify immigration
              processes. Our story is shaped by the aspirations of those
              we&apos;ve helped. Let us be part of your Canadian journey.
          </Paragraph>
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

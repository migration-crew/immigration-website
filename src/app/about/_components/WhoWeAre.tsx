import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Caption } from '@/components/common/text/Caption';
import { CtaButton } from '@/components/common/text/CtaButton';
import { Heading } from '@/components/common/text/Heading';
import { Menu } from '@/components/common/text/Menu';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/UpImmigrationButton';
import Ami from '@/public/Ami.png';
import Larissa from '@/public/Larissa.png';
import Shipman from '@/public/Shipman.png';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const WhoWeAre = () => {
    const t = useTranslations('AboutUs');

    return (
        <SectionContainer className='py-10 lx:py-[100px]'>
            <Heading className='pb-4'>{t('section1Title')}</Heading>
            <Paragraph>{t('section1P1')}</Paragraph>
            <div className='xl:flex xl:gap-6 py-6 xl:pt-[100px] xl:pb-4'>
                <ResponsiveImage
                    alt='Larissa'
                    src={Larissa}
                    divClassName='h-[316px] mb-4 xl:m-0 xl:h-auto xl:w-1/2'
                    imgClassName='rounded-3xl'
                />
                <div className='xl:w-1/2'>
                    <CtaButton>Larissa Castelluber</CtaButton>
                    <Caption className='text-disabled-black'>RCIC</Caption>
                    <Paragraph className='mt-5'>
                        {t('section2P1')}
                        <br />
                        <br />
                        {t('section2P2')}
                    </Paragraph>
                </div>
            </div>
            <div className='xl:flex xl:gap-6'>
                <div className='flex xl:w-1/2 gap-4 xl:gap-6'>
                    <div className='w-1/2'>
                        <ResponsiveImage
                            alt='Shipman'
                            src={Shipman}
                            divClassName='w-full h-[170px]'
                            imgClassName='rounded-3xl'
                        />
                        <Menu>{t('section2Name')}</Menu>
                        <Caption>{t('section2Position')}</Caption>
                    </div>
                    <div className='w-1/2'>
                        <ResponsiveImage
                            alt='Ami'
                            src={Ami}
                            divClassName='w-full h-[170px]'
                            imgClassName='rounded-3xl'
                        />
                        <Menu>{t('section2Name')}</Menu>
                        <Caption>{t('section2Position')}</Caption>
                    </div>
                </div>
                <div className='xl:w-1/2 mt-6 xl:m-0'>
                    <Button className='w-full xl:w-fit py-3 px-4'>
                        <Link href='/book-consultation'>
                            Book a free consultation
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionContainer>
    );
};

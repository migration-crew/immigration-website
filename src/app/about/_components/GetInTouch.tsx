import { SectionContainer } from '@/components/common/SectionContainer';
import { Heading } from '@/components/common/text/Heading';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/UpImmigrationButton';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const GetInTouch = () => {
    const t = useTranslations('AboutUs');

    return (
        <SectionContainer
            className='py-10 xl:pb-[100px]'
            bgColor='bg-neutral-secondary-white xl:bg-inherit'
        >
            <Heading>{t('section5Title')}</Heading>
            <Paragraph className='py-4 xl:pt-5'>{t('section5P1')}</Paragraph>
            <Button className='w-full xl:w-fit py-3 px-4'>
                <Link href='/book-consultation'>Book a free consultation</Link>
            </Button>
        </SectionContainer>
    );
};

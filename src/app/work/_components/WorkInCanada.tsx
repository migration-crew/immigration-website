import { BookFreeConsultation } from '@/components/common/BookFreeConsultation';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Heading } from '@/components/common/text/Heading';
import { Paragraph } from '@/components/common/text/Paragraph';
import { useTranslations } from 'next-intl';

export function WorkInCanada() {
    const t = useTranslations('Work');

    return (
        <SectionContainer className='flex flex-col gap-4'>
            <Heading className='text-xl font-bold'>
                {t('section1Title')}
            </Heading>
            <Paragraph>{t('section1P1')}</Paragraph>
            <Paragraph>{t('section1P2')}</Paragraph>
            <BookFreeConsultation className='xl:w-fit' />
        </SectionContainer>
    );
}

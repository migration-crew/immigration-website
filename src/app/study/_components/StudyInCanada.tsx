import { BookFreeConsultation } from '@/components/common/BookFreeConsultation';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Heading } from '@/components/common/text/Heading';
import { Paragraph } from '@/components/common/text/Paragraph';
import { useTranslations } from 'next-intl';

export function StudyInCanada() {
    const t = useTranslations('Study');

    return (
        <SectionContainer className='flex flex-col gap-4'>
            <Heading className=''>{t('section1Title')}</Heading>
            <Paragraph className=''>{t('section1P1')}</Paragraph>
            <BookFreeConsultation className='xl:w-fit' />
        </SectionContainer>
    );
}

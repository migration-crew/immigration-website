import { SectionContainer } from '@/components/common/SectionContainer';
import { Heading } from '@/components/common/text/Heading';
import { useTranslations } from 'next-intl';
import { StudyCardList } from './StudyCardList';

export function KnowBeforeEnrolling() {
    const t = useTranslations('Study');

    return (
        <SectionContainer className='flex flex-col gap-6'>
            <Heading className=''>{t('section2Title')}</Heading>
            <StudyCardList />
        </SectionContainer>
    );
}

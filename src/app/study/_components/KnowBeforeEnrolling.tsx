import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { StudyCardList } from "./StudyCardList";
import { useTranslations } from 'next-intl';

export function KnowBeforeEnrolling() {
    const t = useTranslations('Study');

    return (
        <SectionContainer className='flex flex-col gap-6'>
            <Heading className=''>{t('section2Title')}</Heading>
            <StudyCardList />
        </SectionContainer>
    );
}

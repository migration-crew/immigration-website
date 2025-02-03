import { SectionContainer } from '@/components/common/SectionContainer';
import { studyCardItems } from '@/data/studyCardItems';
import { useTranslations } from 'next-intl';
import { StudyCard } from './StudyCardItem';

export function StudyCardList() {
    const t = useTranslations('Study');

    return (
        <SectionContainer className='flex flex-col gap-6 xl:grid xl:grid-cols-2'>
            {studyCardItems.map((item) => (
                <StudyCard
                    key={item.title}
                    title={t(item.title)}
                    description={t(item.description)}
                    alt={item.alt}
                    image={item.image}
                />
            ))}
        </SectionContainer>
    );
}

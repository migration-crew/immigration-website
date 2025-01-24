import BeforeStudy from '@/public/before-study.png';
import PostGraduationOpportunities from '@/public/post-graduation-opportunities.png';
import StudyBenefits from '@/public/study-benefits.png';
import StudyWorkPermits from '@/public/study-work-permits.png';
import { StudyCardType } from '@/types/studyCardType';

export const studyCardItems: StudyCardType[] = [
    {
        title: 'section2Sub1',
        image: BeforeStudy,
        alt: 'Before study in Canada image',
        description: 'section2P1',
    },
    {
        title: 'section2Sub2',
        image: StudyWorkPermits,
        alt: 'Study and Work Permits image',
        description: 'section2P2',
    },
    {
        title: 'section2Sub3',
        image: StudyBenefits,
        alt: 'Benefits of Studying in Canada image',
        description: 'section2P3',
    },
    {
        title: 'section2Sub4',
        image: PostGraduationOpportunities,
        alt: 'Post Graduation Oportunities image',
        description: 'section2P4',
    },
];

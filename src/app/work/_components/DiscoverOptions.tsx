'use client';

import { SectionContainer } from '@/components/common/SectionContainer';
import { Heading } from '@/components/common/text/Heading';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { NavCardList } from '../../../components/common/NavCardList';
import { DiscoverOptionsList } from './DiscoverOptionsList';

export function DiscoverOptions() {
    const workPermitRef = useRef<HTMLDivElement>(null);
    const openWorkPermitRef = useRef<HTMLDivElement>(null);
    const pgwpRef = useRef<HTMLDivElement>(null);
    const lmiaRef = useRef<HTMLDivElement>(null);
    const sowpRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('Work');

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const refs = {
        workPermitRef,
        openWorkPermitRef,
        pgwpRef,
        lmiaRef,
        sowpRef,
    };

    return (
        <SectionContainer className='flex flex-col gap-4'>
            <Heading className='text-2xl font-bold'>
                {t('discoverOptionsTitle')}
            </Heading>
            <DiscoverOptionsList scrollToRef={scrollToRef} refs={refs} />
            <NavCardList refs={refs} />
        </SectionContainer>
    );
}

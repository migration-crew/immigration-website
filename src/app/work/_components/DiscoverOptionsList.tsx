import { useTranslations } from 'next-intl';
import { DiscoverOptionsItem } from './DiscoverOptionsItem';

interface Props {
    scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
    refs: {
        workPermitRef: React.RefObject<HTMLDivElement>;
        openWorkPermitRef: React.RefObject<HTMLDivElement>;
        pgwpRef: React.RefObject<HTMLDivElement>;
        lmiaRef: React.RefObject<HTMLDivElement>;
        sowpRef: React.RefObject<HTMLDivElement>;
    };
}

const discoverItems = [
    {
        href: '#work-permit-extensions',
        label: 'discoverOptionsLabel1',
        refKey: 'workPermitRef',
    },
    {
        href: '#open-work-permit',
        label: 'discoverOptionsLabel2',
        refKey: 'openWorkPermitRef',
    },
    {
        href: '#pgwp',
        label: 'discoverOptionsLabel3',
        refKey: 'pgwpRef',
    },
    {
        href: '#lmia',
        label: 'discoverOptionsLabel4',
        refKey: 'lmiaRef',
    },
    {
        href: '#sowp',
        label: 'discoverOptionsLabel5',
        refKey: 'sowpRef',
    },
];

export function DiscoverOptionsList({ scrollToRef, refs }: Props) {
    const t = useTranslations('Work');

    return (
        <div className='flex flex-wrap gap-3 mb-7'>
            {discoverItems.map((item) => (
                <DiscoverOptionsItem
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                        scrollToRef(refs[item.refKey as keyof typeof refs])
                    }
                >
                    {t(item.label)}
                </DiscoverOptionsItem>
            ))}
        </div>
    );
}

import Lmia from "@/public/lmia.png";
import OpenWorkPermit from "@/public/open-work-permit.png";
import Pgwp from "@/public/pgwp.png";
import Sowp from "@/public/sowp.png";
import WorkPermitExtensions from "@/public/work-permit-extensions.png";
import { useTranslations } from 'next-intl';
import { StaticImageData } from "next/image";
import { forwardRef } from "react";
import { NavCardItem } from "../../app/work/_components/NavCardItem";

interface Props {
  refs: {
    workPermitRef: React.RefObject<HTMLDivElement>;
    openWorkPermitRef: React.RefObject<HTMLDivElement>;
    pgwpRef: React.RefObject<HTMLDivElement>;
    lmiaRef: React.RefObject<HTMLDivElement>;
    sowpRef: React.RefObject<HTMLDivElement>;
  };
}

type navCardItemsType = {
  ref: string;
  id: string;
  title: string;
  alt: string;
  description: string;
  image: StaticImageData;
  buttonLink?: string;
};

const navCardItems: navCardItemsType[] = [
    {
        ref: 'workPermitRef',
        id: 'work-permit-extensions',
        title: 'navCard1Title',
        alt: 'Work Permit Extensions',
        description: 'navCard1Description',
        image: WorkPermitExtensions,
    },
    {
        ref: 'openWorkPermitRef',
        id: 'open-work-permit',
        title: 'navCard2Title',
        alt: 'Open Work Permit',
        description: 'navCard2Description',
        image: OpenWorkPermit,
    },
    {
        ref: 'pgwpRef',
        id: 'pgwp',
        title: 'navCard3Title',
        alt: 'Post-Graduation Work Permit (PGWP)',
        description: 'navCard3Description',
        image: Pgwp,
    },
    {
        ref: 'lmiaRef',
        id: 'lmia',
        title: 'navCard4Title',
        alt: 'Labour Market Impact Assessment (LMIA)',
        description: 'navCard4Description',
        image: Lmia,
    },
    {
        ref: 'sowpRef',
        id: 'sowp',
        title: 'navCard5Title',
        alt: 'Spousal/ Common-Law Partner Open Work Permit (SOWP)',
        description: 'navCard5Description',
        image: Sowp,
    },
];

export const NavCardList = forwardRef<HTMLDivElement, Props>(
  function NavCardList({ refs }: Props, ref) {

    const t = useTranslations("Work");

    return (
        <div
            className='flex flex-col xl:grid xl:grid-cols-3 gap-4 flex-shrink-0'
            ref={ref}
        >
            {navCardItems.map((item, index) => (
                <NavCardItem
                    key={item.id}
                    ref={refs[item.ref as keyof typeof refs]}
                    id={item.id}
                    title={t(item.title)}
                    alt={item.alt}
                    description={t(item.description)}
                    image={item.image}
                    isLast={index === navCardItems.length - 1}
                    buttonLink={item.buttonLink}
                />
            ))}
        </div>
    );
  }
);

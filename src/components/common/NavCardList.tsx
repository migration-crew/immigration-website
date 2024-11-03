import Lmia from "@/public/lmia.png";
import OpenWorkPermit from "@/public/open-work-permit.png";
import Pgwp from "@/public/pgwp.png";
import Sowp from "@/public/sowp.png";
import WorkPermitExtensions from "@/public/work-permit-extensions.png";
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

const navCardItems = [
  {
    ref: "workPermitRef",
    id: "work-permit-extensions",
    title: "Work Permit / Extensions",
    alt: "Work Permit Extensions",
    description:
      "Canadian employers may hire temporary foreign workers when suitable candidates can't be found among Canadian residents (permanent residents or citizens). Employers seeking to hire foreign workers must apply for a document called a Labour Market Impact Assessment (LMIA) if they meet the eligibility criteria. A positive LMIA demonstrates the need for a foreign worker to fill the position.",
    image: WorkPermitExtensions,
  },
  {
    ref: "openWorkPermitRef",
    id: "open-work-permit",
    title: "Open Work Permit",
    alt: "Open Work Permit",
    description:
      "Document issued within Canada that allows certain foreigners to work for any Canadian company. To be eligible you must be the spouse of an international student enrolled full-time at a Canadian college (mostly public) or university, or be the spouse of a person who has worker status with job offer at NOC 0, A or B. You can also obtain an open work permit, if you are part of a International Experience Canada program.",
    image: OpenWorkPermit,
  },
  {
    ref: "pgwpRef",
    id: "pgwp",
    title: "Post-Graduation Work Permit (PGWP)",
    alt: "Post-Graduation Work Permit (PGWP)",
    description:
      "For individuals with relevant experience in cultural or athletic activities to gain permanent residency in Canada. This program is ideal for those who have demonstrated their ability to be self-employed in fields such as music, writing, visual arts, or professional athletics. By contributing their unique talents, self-employed individuals help enrich Canada’s cultural and athletic landscape.",
    image: Pgwp,
  },
  {
    ref: "lmiaRef",
    id: "lmia",
    title: "Labour Market Impact Assessment (LMIA)",
    alt: "Labour Market Impact Assessment (LMIA)",
    description:
      "For skilled foreign workers and international graduates to build a new life in one of Canada's vibrant Atlantic provinces: New Brunswick, Nova Scotia, Newfoundland and Labrador, and Prince Edward Island. This program makes it easier for newcomers to settle and contribute to the growth of these welcoming communities.",
    image: Lmia,
  },
  {
    ref: "sowpRef",
    id: "sowp",
    title: "Spousal/ Common-Law Partner Open Work Permit (SOWP)",
    alt: "Spousal/ Common-Law Partner Open Work Permit (SOWP)",
    description:
      "Spouse, common-law partner or conjugal partner living in Canada who’s being sponsored for permanent residence an accompanying dependent child of the principal applicant",
    image: Sowp,
  },
];

export const NavCardList = forwardRef<HTMLDivElement, Props>(
  function NavCardList({ refs }: Props, ref) {
    return (
      <div className="flex flex-col flex-shrink-0" ref={ref}>
        {navCardItems.map((item, index) => (
          <NavCardItem
            key={item.id}
            ref={refs[item.ref as keyof typeof refs]}
            id={item.id}
            title={item.title}
            alt={item.alt}
            description={item.description}
            image={item.image}
            isLast={index === navCardItems.length - 1}
          />
        ))}
      </div>
    );
  }
);

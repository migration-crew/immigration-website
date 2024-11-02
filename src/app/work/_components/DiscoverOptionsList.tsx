import { DiscoverOptionsItem } from "./DiscoverOptionsItem";

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
    href: "#work-permit-extensions",
    label: "Work Permit/ Extensions",
    refKey: "workPermitRef",
  },
  {
    href: "#open-work-permit",
    label: "Open Work Permit",
    refKey: "openWorkPermitRef",
  },
  {
    href: "#pgwp",
    label: "Post-Graduation Work Permit (PGWP)",
    refKey: "pgwpRef",
  },
  {
    href: "#lmia",
    label: "Labour Market Impact Assessment (LMIA)",
    refKey: "lmiaRef",
  },
  {
    href: "#sowp",
    label: "Spousal/ Common-Law Partner Open Work Permit (SOWP)",
    refKey: "sowpRef",
  },
];

export function DiscoverOptionsList({ scrollToRef, refs }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {discoverItems.map((item) => (
        <DiscoverOptionsItem
          key={item.href}
          href={item.href}
          onClick={() => scrollToRef(refs[item.refKey as keyof typeof refs])}
        >
          {item.label}
        </DiscoverOptionsItem>
      ))}
    </div>
  );
}

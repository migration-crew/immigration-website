import { DiscoverOptionsItemIP } from "./DiscoverOptionsItemIP";

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
    href: "#express-entry",
    label: "Express Entry",
    refKey: "expressEntryRef",
  },
  {
    href: "#pnp",
    label: "Provincial Nominee Programs - PNP",
    refKey: "pnpRef",
  },
  {
    href: "#family",
    label: "Family Sponsorship",
    refKey: "familyRef",
  },
  {
    href: "#caregiver",
    label: "Caregiver Programs",
    refKey: "caregiverRef",
  },
  {
    href: "#start-up",
    label: "Start-Up Visa Program",
    refKey: "start-upRef",
  },
  {
    href: "#self-employed",
    label: "Self-Employed Program",
    refKey: "self-employedRef",
  },
  {
    href: "#humanitarian",
    label: "Humanitarian and Compassionate - H&C",
    refKey: "humanitarianRef",
  },
  {
    href: "#atlantic",
    label: "Atlantic Immigration Program -AIP",
    refKey: "atlanticRef",
  },
  {
    href: "#rnip",
    label: "Northern Immigration Program - RNIP",
    refKey: "rnipRef",
  },
];

export function DiscoverOptionsListIP({ scrollToRef, refs }: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-7">
      {discoverItems.map((item) => (
        <DiscoverOptionsItemIP
          key={item.href}
          href={item.href}
          onClick={() => scrollToRef(refs[item.refKey as keyof typeof refs])}
        >
          {item.label}
        </DiscoverOptionsItemIP>
      ))}
    </div>
  );
}

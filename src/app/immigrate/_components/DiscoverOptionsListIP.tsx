import { useTranslations } from "next-intl";
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

const DiscoverItems = () => {
  const t = useTranslations("ImmigrationPrograms");
  return [
    {
      href: "#express-entry",
      label: t("ExpressEntry"),
      refKey: "expressEntryRef",
    },
    {
      href: "#pnp",
      label: t("ProvincialNomineeProgram"),
      refKey: "pnpRef",
    },
    {
      href: "#family",
      label: t("FamilySponsorship"),
      refKey: "familyRef",
    },
    {
      href: "#caregiver",
      label: t("CaregiversPrograms"),
      refKey: "caregiverRef",
    },
    {
      href: "#start-up",
      label: t("StartUpVisa"),
      refKey: "start-upRef",
    },
    {
      href: "#self-employed",
      label: t("SelfEmployedProgram"),
      refKey: "self-employedRef",
    },
    {
      href: "#humanitarian",
      label: t("HumanitarianAndCompassionate"),
      refKey: "humanitarianRef",
    },
    {
      href: "#atlantic",
      label: t("AtlanticImmigrationProgram"),
      refKey: "atlanticRef",
    },
    {
      href: "#rnip",
      label: t("NorthernImmigrationProgram"),
      refKey: "rnipRef",
    },
  ];
};

export function DiscoverOptionsListIP({ scrollToRef, refs }: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-7">
      {DiscoverItems().map((item) => (
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

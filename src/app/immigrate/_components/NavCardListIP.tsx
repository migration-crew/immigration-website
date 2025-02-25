import atlanticIP from "@/public/atlanticIP.jpg";
import caregiver from "@/public/caregiver.jpg";
import expressEntry from "@/public/expressEntry.jpg";
import familySP from "@/public/familySP.jpg";
import humanitarian from "@/public/humanitarian.jpg";
import PNP from "@/public/PNP.png";
import rnip from "@/public/rnipImage.jpg";
import selfEmployed from "@/public/selfEmployed.jpg";
import startUp from "@/public/startUp.png";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { forwardRef } from "react";
import { NavCardItemIP } from "./NavCardItemIP";

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

const NavCardItems = (): navCardItemsType[] => {
  const t = useTranslations("ImmigrationPrograms");
  return [
    {
      ref: "expressEntryRef",
      id: "express-entry",
      title: t("ExpressEntry"),
      alt: "Express Entry",
      description: t("EEDetails"),
      image: expressEntry,
      buttonLink: "/immigrate/express-entry",
    },
    {
      ref: "pnpRef",
      id: "pnp",
      title: t("ProvincialNomineeProgram"),
      alt: "Provincial Nominee Programs - PNP",
      description: t("PNPDetails"),
      image: PNP,
      buttonLink: "/immigrate/pnp",
    },
    {
      ref: "familyRef",
      id: "family",
      title: t("FamilySponsorship"),
      alt: "Family Sponsorship",
      description: t("FamilyDetails"),
      image: familySP,
      buttonLink: "/immigrate/family",
    },
    {
      ref: "caregiverRef",
      id: "caregiver",
      title: t("CaregiversPrograms"),
      alt: "Caregiver Programs",
      description: t("CaregiversDetails"),
      image: caregiver,
      buttonLink: "/immigrate/caregiver",
    },
    {
      ref: "start-upRef",
      id: "start-up",
      title: t("StartUpVisa"),
      alt: "Start-Up Visa Program",
      description: t("StartUpVisaDetails"),
      image: startUp,
      buttonLink: "/immigrate/start-up",
    },
    {
      ref: "self-employedRef",
      id: "self-employed",
      title: t("SelfEmployedProgram"),
      alt: "Self-Employed Program",
      description: t("SelfEmployedDetails"),
      image: selfEmployed,
      buttonLink: "/immigrate/self-employed",
    },
    {
      ref: "humanitarianRef",
      id: "humanitarian",
      title: t("HumanitarianAndCompassionate"),
      alt: "Humanitarian and Compassionate - H&C",
      description: t("HumanitarianAndCompassionateDetails"),
      image: humanitarian,
      buttonLink: "/immigrate/humanitarian",
    },
    {
      ref: "atlanticRef",
      id: "atlantic",
      title: t("AtlanticImmigrationProgram"),
      alt: "Atlantic Immigration Program -AIP",
      description: t("AtlanticImmigrationDetails"),
      image: atlanticIP,
      buttonLink: "/immigrate/atlantic",
    },
    {
      ref: "rnipRef",
      id: "rnip",
      title: t("NorthernImmigrationProgram"),
      alt: "Northern Immigration Program - RNIP",
      description: t("NorthernImmigrationDetails"),
      image: rnip,
      buttonLink: "/immigrate/rnip",
    },
  ];
};

export const NavCardListIP = forwardRef<HTMLDivElement, Props>(
  function NavCardListIP({ refs }: Props, ref) {
    return (
      <div
        className="flex flex-col xl:grid xl:grid-cols-3 gap-4 flex-shrink-0"
        ref={ref}
      >
        {NavCardItems().map((item, index) => (
          <div key={item.id}>
            <NavCardItemIP
              key={item.id}
              ref={refs[item.ref as keyof typeof refs]}
              id={item.id}
              title={item.title}
              alt={item.alt}
              description={item.description}
              image={item.image}
              isLast={index === NavCardItems().length - 1}
              buttonLink={item.buttonLink}
            />
          </div>
        ))}
      </div>
    );
  }
);

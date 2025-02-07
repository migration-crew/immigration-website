import atlanticIP from "@/public/atlanticIP.jpg";
import caregiver from "@/public/caregiver.jpg";
import expressEntry from "@/public/expressEntry.jpg";
import familySP from "@/public/familySP.jpg";
import humanitarian from "@/public/humanitarian.jpg";
import PNP from "@/public/PNP.png";
import RNIP from "@/public/rnip.jpg";
import selfEmployed from "@/public/selfEmployed.jpg";
import startUp from "@/public/startUp.png";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/legacy/image";
type ImmigrationProgramsType = {
  title: string;
  description: string;
  image: StaticImageData;
  details: string;
  endpoint: string;
};

export const ImmigrationPrograms = (): ImmigrationProgramsType[] => {
  const t = useTranslations("ImmigrationPrograms");
  return [
    {
      title: t("ExpressEntry"),
      description: t("EEDescription"),
      image: expressEntry,
      details: t("EEDetails"),
      endpoint: "express-entry",
    },
    {
      title: t("ProvincialNomineeProgram"),
      description: t("PNPDescription"),
      image: PNP,
      details: t("PNPDetails"),
      endpoint: "pnp",
    },
    {
      title: t("FamilySponsorship"),
      description: t("FamilyDescription"),
      image: familySP,
      details: t("FamilyDetails"),
      endpoint: "family",
    },
    {
      title: t("CaregiverPrograms"),
      description: t("CaregiverDescription"),
      image: caregiver,
      details: t("CaregiverDetails"),
      endpoint: "caregiver",
    },
    {
      title: t("StartUpVisa"),
      description: t("StartUpVisaDescription"),
      image: startUp,
      details: t("StartUpVisaDetails"),
      endpoint: "start-up",
    },
    {
      title: t("SelfEmployedProgram"),
      description: t("SelfEmployedDescription"),
      image: selfEmployed,
      details: t("SelfEmployedDetails"),
      endpoint: "self-employed",
    },
    {
      title: t("HumanitarianAndCompassionate"),
      description: t("HUmanitarianAndCompassionateDescription"),
      image: humanitarian,
      details: t("HumanitarianAndCompassionateDetails"),
      endpoint: "humanitarian",
    },
    {
      title: t("AtlanticImmigrationProgram"),
      description: t("AtlanticImmigrationDescription"),
      image: atlanticIP,
      details: t("AtlanticImmigrationDetails"),
      endpoint: "atlantic",
    },
    {
      title: t("NorthernImmigrationProgram"),
      description: t("NorthernImmigrationDescription"),
      image: RNIP,
      details: t("NorthernImmigrationDetails"),
      endpoint: "rnip",
    },
  ];
};

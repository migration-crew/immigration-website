import { HeaderPicture } from "@/components/common/HeaderPicture";
import PNP from "@/public/PNP.png";
import { useTranslations } from "next-intl";
import { IntroductionPNP } from "../_components/IntroductionPNP";
import { PNProgramsComponent } from "../_components/PNProgramsComponent";
import { ProvincesAndTerritories } from "../_components/ProvincesAndTerritories";

export default function ProvincialNominiee() {
  const t = useTranslations("IntroductionPNP");
  return (
    <>
      <HeaderPicture alt={t("title")} src={PNP} title={t("title")} />

      <IntroductionPNP />

      <ProvincesAndTerritories />

      <PNProgramsComponent />
    </>
  );
}

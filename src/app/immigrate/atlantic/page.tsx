import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import atlanticIP from "@/public/atlanticIP.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionAtlantic } from "../_components/IntroductionAtlantic";
import { EPSteps } from "../content/steps";

export default function AtlanticImmigration() {
  const t = useTranslations("ImmigrationEPSteps");
  const t2 = useTranslations("IntroductionAtlantic");
  return (
    <>
      <HeaderPicture alt={t2("title")} src={atlanticIP} title={t2("title")} />

      <IntroductionAtlantic />

      <ApplicationStepDesktop steps={EPSteps()} title={t("EPStepsHeading")} />
      <ApplicationStepMobile
        steps={EPSteps()}
        title={t("EPStepsHeading")}
        circleSpacing={130}
        height="h-[150px]"
      />

      <EEPrograms />
    </>
  );
}

import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import atlanticIP from "@/public/atlanticIP.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionAtlantic } from "../_components/IntroductionAtlantic";
import { EPSteps } from "../content/steps";

export default function AtlanticImmigration() {
  const t = useTranslations("ImmigrationsEPSteps");
  return (
    <>
      <HeaderPicture
        alt="AIP Image"
        src={atlanticIP}
        title="Atlantic Immigration Program"
      />

      <IntroductionAtlantic />

      <ApplicationStepDesktop steps={EPSteps()} title={t("EPStepsHeading")} />
      <ApplicationStepMobile
        steps={EPSteps()}
        title={t("EPStepsHeading")}
        circleSpacing={110}
        height="h-[130px]"
      />

      <EEPrograms />
    </>
  );
}

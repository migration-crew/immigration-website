import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import startUP from "@/public/startUp.png";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionStartUp } from "../_components/IntroductionStartUp";
import { EPSteps } from "../content/steps";
export default function StartUp() {
  const t = useTranslations("ImmigrationEPSteps");
  const t2 = useTranslations("IntroductionStartUp");
  return (
    <>
      <HeaderPicture alt={t2("title")} src={startUP} title={t2("title")} />

      <IntroductionStartUp />

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

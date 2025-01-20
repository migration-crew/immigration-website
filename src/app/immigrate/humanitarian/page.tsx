import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import humanitarian from "@/public/humanitarian.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionHumanitarian } from "../_components/IntroductionHumanitarian";
import { EPSteps } from "../content/steps";

export default function Humanitarian() {
  const t = useTranslations("ImmigrationEPSteps");
  return (
    <>
      <HeaderPicture
        alt="Humanitarian and Compassionate Image"
        src={humanitarian}
        title="Humanitarian and Compassionate  Program"
      />

      <IntroductionHumanitarian />

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

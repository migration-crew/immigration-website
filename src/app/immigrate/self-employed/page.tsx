import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import selfEmployed from "@/public/selfEmployed.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionSelfEmployed } from "../_components/IntroductionSelfEmployed";
import { EPSteps } from "../content/steps";

export default function SelfEmployed() {
  const t = useTranslations("ImmigrationEPSteps");
  return (
    <>
      <HeaderPicture
        alt="Self-Employed Image"
        src={selfEmployed}
        title="Self-Employed Program"
      />

      <IntroductionSelfEmployed />

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

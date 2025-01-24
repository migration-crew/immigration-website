import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import caregiver from "@/public/caregiver.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionCaregiver } from "../_components/IntroductionCaregiver";
import { EPSteps } from "../content/steps";

export default function Caregiver() {
  const t = useTranslations("ImmigrationEPSteps");
  const t2 = useTranslations("IntroductionCaregiver");
  return (
    <>
      <HeaderPicture alt={t2("title")} src={caregiver} title={t2("title")} />

      <IntroductionCaregiver />

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

import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import familySP from "@/public/familySP.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionFamily } from "../_components/IntroductionFamily";
import { EPSteps } from "../content/steps";

export default function Family() {
  const t = useTranslations("ImmigrationEPSteps");
  const t2 = useTranslations("IntroductionFamily");
  return (
    <>
      <HeaderPicture alt={t2("title")} src={familySP} title={t2("title")} />

      <IntroductionFamily />

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

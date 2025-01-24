import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import expressEntry from "@/public/expressEntry.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionEE } from "../_components/IntroductionEE";
import { EPSteps } from "../content/steps";

export default function ExpressEntry() {
  const t = useTranslations("ImmigrationEPSteps");
  const t2 = useTranslations("IntroductionExpressEntry");
  return (
    <>
      <HeaderPicture alt={t2("title")} src={expressEntry} title={t2("title")} />

      <IntroductionEE />

      <ApplicationStepDesktop steps={EPSteps()} title={t("EPStepsHeading")} />
      <ApplicationStepMobile
        circleSpacing={130}
        steps={EPSteps()}
        title={t("EPStepsHeading")}
        height="h-[150px]"
      />

      <EEPrograms />
    </>
  );
}

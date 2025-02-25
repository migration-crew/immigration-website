import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import rnip from "@/public/rnipImage.jpg";
import { useTranslations } from "next-intl";
import { EEPrograms } from "../_components/EEPrograms";
import { IntoductionRNIP } from "../_components/IntoductionRNIP";
import { EPSteps } from "../content/steps";

export default function NorthernImmigrationRNIP() {
  const t = useTranslations("ImmigrationEPSteps");
  const t2 = useTranslations("IntroductionRNIP");
  return (
    <>
      <HeaderPicture alt={t2("title")} src={rnip} title={t2("title")} />

      <IntoductionRNIP />

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

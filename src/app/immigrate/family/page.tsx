import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import familySP from "@/public/familySP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionFamily } from "../_components/IntroductionFamily";
import { EPSteps } from "../content/steps";

export default function ExpressEntry() {
  return (
    <>
      <HeaderPicture
        alt="Family Sponsorship Image"
        src={familySP}
        title="Family Sponsorship"
      />

      <IntroductionFamily />

      <ApplicationStepDesktop steps={EPSteps} title="What is the process?" />
      <ApplicationStepMobile steps={EPSteps} title="What is the process?" circleSpacing={110} height="h-[130px]" />

      <EEPrograms />
    </>
  );
}

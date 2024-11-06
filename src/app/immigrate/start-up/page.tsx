import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import startUP from "@/public/startUp.png";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionStartUp } from "../_components/IntroductionStartUp";
import { EPSteps } from "../content/steps";
export default function StartUp() {
  return (
    <>
      <HeaderPicture
        alt="Start-Up Visa Image"
        src={startUP}
        title="Start-Up Visa Program"
      />

      <IntroductionStartUp />

      <ApplicationStepDesktop steps={EPSteps} title="What is the process?" />
      <ApplicationStepMobile
        steps={EPSteps}
        title="What is the process?"
        circleSpacing={110}
        height="h-[130px]"
      />
      <EEPrograms />
    </>
  );
}

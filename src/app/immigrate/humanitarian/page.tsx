import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import humanitarian from "@/public/humanitarian.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionHumanitarian } from "../_components/IntroductionHumanitarian";
import { EPSteps } from "../content/steps";

export default function Humanitarian() {
  return (
    <>
      <HeaderPicture
        alt="Humanitarian and Compassionate Image"
        src={humanitarian}
        title="Humanitarian and Compassionate  Program"
      />

      <IntroductionHumanitarian />

      <ApplicationStepDesktop steps={EPSteps} title="What is the process?" />
      <ApplicationStepMobile steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

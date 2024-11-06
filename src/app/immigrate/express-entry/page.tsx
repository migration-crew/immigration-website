import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import expressEntry from "@/public/expressEntry.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionEE } from "../_components/IntroductionEE";
import { EPSteps } from "../content/steps";

export default function ExpressEntry() {
  return (
    <>
      <HeaderPicture
        alt="Express Entry Image"
        src={expressEntry}
        title="Express Entry"
      />

      <IntroductionEE />

      <ApplicationStepDesktop steps={EPSteps} title="What is the process?" />
      <ApplicationStepMobile
        circleSpacing={110}
        steps={EPSteps}
        title="What is the process?"
      />

      <EEPrograms />
    </>
  );
}

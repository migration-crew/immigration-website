import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import atlanticIP from "@/public/atlanticIP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionAtlantic } from "../_components/IntroductionAtlantic";
import { EPSteps } from "../content/steps";

export default function AtlanticImmigration() {
  return (
    <>
      <HeaderPicture
        alt="AIP Image"
        src={atlanticIP}
        title="Atlantic Immigration Program"
      />

      <IntroductionAtlantic />

      <ApplicationStepDesktop steps={EPSteps} title="What is the process?" />
      <ApplicationStepMobile steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

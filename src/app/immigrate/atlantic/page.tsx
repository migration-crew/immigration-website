import { HeaderPicture } from "@/components/common/HeaderPicture";
import { TimelineDesktop } from "@/components/common/TimelineDesktop";
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

      <TimelineDesktop steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

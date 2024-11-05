import { HeaderPicture } from "@/components/common/HeaderPicture";
import { TimelineDesktop } from "@/components/common/TimelineDesktop";
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

      <TimelineDesktop steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { TimelineDesktop } from "@/components/common/TimelineDesktop";
import selfEmployed from "@/public/selfEmployed.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionSelfEmployed } from "../_components/IntroductionSelfEmployed";
import { EPSteps } from "../content/steps";

export default function SelfEmployed() {
  return (
    <>
      <HeaderPicture
        alt="Self-Employed Image"
        src={selfEmployed}
        title="Self-Employed Program"
      />

      <IntroductionSelfEmployed />

      <TimelineDesktop steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

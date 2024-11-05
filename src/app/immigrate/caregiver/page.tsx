import { HeaderPicture } from "@/components/common/HeaderPicture";
import { TimelineDesktop } from "@/components/common/TimelineDesktop";
import caregiver from "@/public/caregiver.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionCaregiver } from "../_components/IntroductionCaregiver";
import { EPSteps } from "../content/steps";

export default function Caregiver() {
  return (
    <>
      <HeaderPicture
        alt="Caregiver Image"
        src={caregiver}
        title="Caregiver Program"
      />

      <IntroductionCaregiver />

      <TimelineDesktop steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

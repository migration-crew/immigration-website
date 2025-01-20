import { ApplicationStepDesktop } from "@/components/common/ApplicationStepDesktop";
import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { HeaderPicture } from "@/components/common/HeaderPicture";
import RNIP from "@/public/RNIP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntoductionRNIP } from "../_components/IntoductionRNIP";
import { EPSteps } from "../content/steps";

export default function NorthernImmigrationRNIP() {
  return (
    <>
      <HeaderPicture
        alt="Northern Immigration Program - RNIP Image"
        src={RNIP}
        title="Northern Immigration Program - RNIP Program"
      />

      <IntoductionRNIP />

      <ApplicationStepDesktop steps={EPSteps} title="What is the process?" />
      <ApplicationStepMobile steps={EPSteps} title="What is the process?" circleSpacing={110} height="h-[130px]" />

      <EEPrograms />
    </>
  );
}

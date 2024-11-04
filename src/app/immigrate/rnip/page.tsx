import { HeaderPicture } from "@/components/common/HeaderPicture";
import { StepsComponent } from "@/components/common/Steps";
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

      <StepsComponent steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

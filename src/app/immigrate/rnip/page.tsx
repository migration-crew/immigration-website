import { HeaderPicture } from "@/components/common/HeaderPicture";
import RNIP from "@/public/RNIP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntoductionRNIP } from "../_components/IntoductionRNIP";
import { StepsEEComponent } from "../_components/StepsEE";

export default function NorthernImmigrationRNIP() {
  return (
    <>
      <HeaderPicture
        alt="Northern Immigration Program - RNIP Image"
        src={RNIP}
        title="Northern Immigration Program - RNIP Program"
      />

      <IntoductionRNIP />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

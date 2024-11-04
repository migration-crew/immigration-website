import { HeaderPicture } from "@/components/common/HeaderPicture";
import atlanticIP from "@/public/atlanticIP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionAtlantic } from "../_components/IntroductionAtlantic";
import { StepsEEComponent } from "../_components/StepsEE";

export default function AtlanticImmigration() {
  return (
    <>
      <HeaderPicture
        alt="AIP Image"
        src={atlanticIP}
        title="Atlantic Immigration Program"
      />

      <IntroductionAtlantic />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { StepsComponent } from "@/components/common/Steps";
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

      <StepsComponent steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

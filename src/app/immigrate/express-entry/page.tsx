import { HeaderPicture } from "@/components/common/HeaderPicture";
import { StepsComponent } from "@/components/common/Steps";
import expressEntry from "@/public/expressEntry.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionEE } from "../_components/IntroductionEE";
import { EPSteps } from "../content/steps";

export default function ExpressEntry() {
  return (
    <>
      <HeaderPicture
        alt="Express Entry Image"
        src={expressEntry}
        title="Express Entry"
      />

      <IntroductionEE />

      <StepsComponent steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

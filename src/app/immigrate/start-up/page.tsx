import { HeaderPicture } from "@/components/common/HeaderPicture";
import { StepsComponent } from "@/components/common/Steps";
import startUP from "@/public/startUp.png";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionStartUp } from "../_components/IntroductionStartUp";
import { EPSteps } from "../content/steps";
export default function StartUp() {
  return (
    <>
      <HeaderPicture
        alt="Start-Up Visa Image"
        src={startUP}
        title="Start-Up Visa Program"
      />

      <IntroductionStartUp />

      <StepsComponent steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

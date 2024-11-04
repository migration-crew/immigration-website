import { HeaderPicture } from "@/components/common/HeaderPicture";
import startUP from "@/public/startUp.png";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionStartUp } from "../_components/IntroductionStartUp";
import { StepsEEComponent } from "../_components/StepsEE";

export default function StartUp() {
  return (
    <>
      <HeaderPicture
        alt="Start-Up Visa Image"
        src={startUP}
        title="Start-Up Visa Program"
      />

      <IntroductionStartUp />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

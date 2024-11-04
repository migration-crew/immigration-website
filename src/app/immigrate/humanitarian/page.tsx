import { HeaderPicture } from "@/components/common/HeaderPicture";
import humanitarian from "@/public/humanitarian.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionHumanitarian } from "../_components/IntroductionHumanitarian";
import { StepsEEComponent } from "../_components/StepsEE";

export default function Humanitarian() {
  return (
    <>
      <HeaderPicture
        alt="Humanitarian and Compassionate Image"
        src={humanitarian}
        title="Humanitarian and Compassionate  Program"
      />

      <IntroductionHumanitarian />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

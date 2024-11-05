import { HeaderPicture } from "@/components/common/HeaderPicture";
import { StepsComponent } from "@/components/common/Steps";
import humanitarian from "@/public/humanitarian.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionHumanitarian } from "../_components/IntroductionHumanitarian";
import { EPSteps } from "../content/steps";

export default function Humanitarian() {
  return (
    <>
      <HeaderPicture
        alt="Humanitarian and Compassionate Image"
        src={humanitarian}
        title="Humanitarian and Compassionate  Program"
      />

      <IntroductionHumanitarian />

      <StepsComponent steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

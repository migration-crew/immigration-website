import { HeaderPicture } from "@/components/common/HeaderPicture";
import { StepsComponent } from "@/components/common/Steps";
import familySP from "@/public/familySP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionFamily } from "../_components/IntroductionFamily";
import { EPSteps } from "../content/steps";

export default function ExpressEntry() {
  return (
    <>
      <HeaderPicture
        alt="Family Sponsorship Image"
        src={familySP}
        title="Family Sponsorship"
      />

      <IntroductionFamily />

      <StepsComponent steps={EPSteps} title="What is the process?" />

      <EEPrograms />
    </>
  );
}

import { HeaderPicture } from "@/components/common/HeaderPicture";
import familySP from "@/public/familySP.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionFamily } from "../_components/IntroductionFamily";
import { StepsEEComponent } from "../_components/StepsEE";

export default function ExpressEntry() {
  return (
    <>
      <HeaderPicture
        alt="Family Sponsorship Image"
        src={familySP}
        title="Family Sponsorship"
      />

      <IntroductionFamily />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

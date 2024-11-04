import { HeaderPicture } from "@/components/common/HeaderPicture";
import caregiver from "@/public/caregiver.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionCaregiver } from "../_components/IntroductionCaregiver";
import { StepsEEComponent } from "../_components/StepsEE";

export default function Caregiver() {
  return (
    <>
      <HeaderPicture
        alt="Caregiver Image"
        src={caregiver}
        title="Caregiver Program"
      />

      <IntroductionCaregiver />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

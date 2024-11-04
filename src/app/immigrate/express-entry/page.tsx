import { HeaderPicture } from "@/components/common/HeaderPicture";
import expressEntry from "@/public/expressEntry.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionEE } from "../_components/IntroductionEE";
import { StepsEEComponent } from "../_components/StepsEE";

export default function ExpressEntry() {
  return (
    <>
      <HeaderPicture
        alt="Express Entry Image"
        src={expressEntry}
        title="Express Entry"
      />

      <IntroductionEE />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

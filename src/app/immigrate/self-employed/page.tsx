import { HeaderPicture } from "@/components/common/HeaderPicture";
import selfEmployed from "@/public/selfEmployed.jpg";
import { EEPrograms } from "../_components/EEPrograms";
import { IntroductionSelfEmployed } from "../_components/IntroductionSelfEmployed";
import { StepsEEComponent } from "../_components/StepsEE";

export default function SelfEmployed() {
  return (
    <>
      <HeaderPicture
        alt="Self-Employed Image"
        src={selfEmployed}
        title="Self-Employed Program"
      />

      <IntroductionSelfEmployed />

      <StepsEEComponent />

      <EEPrograms />
    </>
  );
}

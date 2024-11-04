import { HeaderPicture } from "@/components/common/HeaderPicture";
import PNP from "@/public/PNP.png";
import { IntroductionPNP } from "../_components/IntroductionPNP";
import { PNProgramsComponent } from "../_components/PNProgramsComponent";
import { ProvincesAndTerritories } from "../_components/ProvincesAndTerritories";

export default function ProvincialNominiee() {
  return (
    <>
      <HeaderPicture
        alt="PNP Image"
        src={PNP}
        title="Provincial Nominee Programs"
      />

      <IntroductionPNP />

      <ProvincesAndTerritories />

      <PNProgramsComponent />
    </>
  );
}

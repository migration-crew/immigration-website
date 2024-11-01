import { SectionContainer } from "@/components/common/SectionContainer";
import { DiscoverOptionsButton } from "./DiscoverOptionsButton";

export function DiscoverOptions() {
  return (
    <SectionContainer className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold ">Discover all your options</h2>
      <div className="flex flex-wrap gap-3 ">
        <DiscoverOptionsButton href="/work-permit-extensions">
          Work Permit/ Extensions
        </DiscoverOptionsButton>
        <DiscoverOptionsButton href="">Open Work Permit</DiscoverOptionsButton>
        <DiscoverOptionsButton href="">
          Post-Graduation Work Permit (PGWP)
        </DiscoverOptionsButton>
        <DiscoverOptionsButton href="">
          Labour Market Impact Assessment (LMIA)
        </DiscoverOptionsButton>
        <DiscoverOptionsButton href="">
          Spousal/ Common-Law Partner Open Work Permit (SOWP)
        </DiscoverOptionsButton>
      </div>
    </SectionContainer>
  );
}

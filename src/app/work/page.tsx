import { DiscoverOptions } from "./_components/DiscoverOptions";
import { WorkBackground } from "./_components/WorkBackground";
import { WorkInCanada } from "./_components/WorkInCanada";

export default function WorkPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <WorkBackground />
      {/* <HeaderPicture alt="Image of work page" src={workImage} title={"Work"} />; */}
      <WorkInCanada />
      <DiscoverOptions />
    </div>
  );
}

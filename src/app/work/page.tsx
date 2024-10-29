import { WorkBackground } from "../_components/WorkBackground";
import { WorkInCanada } from "../_components/WorkInCanada";

export default function WorkPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <WorkBackground />
      <WorkInCanada />
    </div>
  );
}

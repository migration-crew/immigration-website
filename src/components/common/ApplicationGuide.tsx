import { Button } from "@/components/ui/UpImmigrationButton";
import Link from "next/link";
import { ApplicationSteps } from "./ApplicationSteps";
import { SectionContainer } from "./SectionContainer";
import { Timeline } from "./TimeLine";

export function ApplicationGuide() {
  return (
    <SectionContainer className="flex flex-col gap-4 xl:hidden">
      <h2 className="text-xl font-bold">Where to start?</h2>
      <div className="flex items-center gap-4">
        <Timeline />
        <ApplicationSteps />
      </div>
      <div>
        <Button className="w-full">
          <Link href="/book-consultation">Book a consultation</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}

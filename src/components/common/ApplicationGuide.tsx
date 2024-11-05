import { Button } from "@/components/ui/UpImmigrationButton";
import Link from "next/link";
import { ApplicationSteps } from "./ApplicationSteps";
import { SectionContainer } from "./SectionContainer";
import { TimelineMobile } from "./TimeLineMobile";

export type Props = {
  title?: string;
};

export function ApplicationGuide({ title }: Props) {
  return (
    <SectionContainer className="flex flex-col gap-4 p-4 xl:hidden">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-center gap-4">
        <TimelineMobile />
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

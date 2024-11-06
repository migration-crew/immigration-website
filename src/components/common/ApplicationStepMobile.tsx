import { Button } from "@/components/ui/UpImmigrationButton";
import { StepsType } from "@/types/StepsType";
import Link from "next/link";
import { ApplicationSteps } from "./ApplicationSteps";
import { SectionContainer } from "./SectionContainer";
import { TimelineMobile } from "./TimeLineMobile";

export type Props = {
  steps: StepsType[];
  title: string;
  circleSpacing?: number;
};

/**
 * Application Step for Mobile
 * @param steps: StepsType[]
 * @param title: string e.g. Where to start?
 * @example
 * ```tsx
 * <ApplicationStepMobile steps={Steps} title="Where to start?">
 * ```
 */
export function ApplicationStepMobile({ steps, title, circleSpacing }: Props) {
  return (
    <SectionContainer className="flex flex-col gap-4 p-4 xl:hidden">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-center gap-4">
        <TimelineMobile
          circleSpacing={circleSpacing}
          numCircles={steps.length}
        />
        <ApplicationSteps steps={steps} />
      </div>
      <div>
        <Button className="w-full">
          <Link href="/book-consultation">Book a consultation</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}

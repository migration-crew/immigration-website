import { StepsType } from "@/types/StepsType";
import { ApplicationSteps } from "./ApplicationSteps";
import { BookFreeConsultation } from "./BookFreeConsultation";
import { SectionContainer } from "./SectionContainer";
import { TimelineMobile } from "./TimeLineMobile";

export type Props = {
  steps: StepsType[];
  title: string;
  circleSpacing?: number;
  height: string;
};

/**
 * Application Step for Mobile
 * @param steps: pass step data StepsType[]
 * @param title: string e.g. Where to start?
 * @param circleSpacing: to change the line height. the space between each circle will change
 * @param height: set height of step explanation. need to include spacing
 * @example
 * ```tsx
 * <ApplicationStepMobile steps={EPSteps} title="What is the process?" circleSpacing={120} height="h-[140px]"  />
 * ```
 */
export function ApplicationStepMobile({
  steps,
  title,
  circleSpacing,
  height,
}: Props) {
  return (
    <SectionContainer className="flex flex-col gap-4 p-4 xl:hidden">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-start gap-4">
        <TimelineMobile
          circleSpacing={circleSpacing}
          numCircles={steps.length}
        />
        <ApplicationSteps steps={steps} height={height} />
      </div>
      <div>
        <BookFreeConsultation />
      </div>
    </SectionContainer>
  );
}

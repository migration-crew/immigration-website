import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { HeavySubHeader } from "@/components/common/text/HeavySubHeader";
import { StepsType } from "@/types/StepsType";
import { BookFreeConsultation } from "./BookFreeConsultation";

type Props = {
  steps: StepsType[];
  title: string;
};

/**
 * Application Step for Desktop
 * @param steps: StepsType[]
 * @param title: string e.g. Where to start?
 * @example
 * ```tsx
 * <ApplicationStepDesktop steps={Steps} title="Where to start?">
 * ```
 */
export const ApplicationStepDesktop = ({ steps, title }: Props) => {
  return (
    <SectionContainer className="py-[100px] hidden xl:block">
      <Heading>{title}</Heading>
      <div className="relative py-8">
        <div className="absolute mt-[13px] left-0 right-0 h-[2px] w-[908px] bg-secondary-blue mx-auto hidden lg:block" />
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-7 h-7 bg-secondary-blue text-white rounded-full flex items-center justify-center font-bold mb-6 relative mx-auto">
                {index + 1}
              </div>
              <div className="flex flex-col justify-between gap-5">
                <HeavySubHeader className="flex justify-center items-center">
                  {step.title}
                </HeavySubHeader>
                <p className="text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <BookFreeConsultation />
      </div>
    </SectionContainer>
  );
};

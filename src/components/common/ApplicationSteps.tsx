import { StepsType } from "@/types/StepsType";

type Props = {
  steps: StepsType[];
};

export function ApplicationSteps({ steps }: Props) {
  return (
    <div className="gap-6 flex flex-col justify-between h-full">
      {steps.map((step) => (
        <div key={step.title} className="">
          <h2 className="text-[16px] text-justify font-normal">{step.title}</h2>
          <p className="text-xs font-normal">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

import { StepsType } from "@/types/StepsType";

type Props = {
  steps: StepsType[];
  height: string
};

export function ApplicationSteps({ steps, height }: Props) {
  return (
    <div className="flex flex-col justify-between h-full">
      {steps.map((step) => (
        <div key={step.title} className={height}>
          <h2 className="text-[16px] text-justify font-normal">{step.title}</h2>
          <p className="text-xs font-normal">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

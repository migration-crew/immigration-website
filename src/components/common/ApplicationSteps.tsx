import { Steps } from "@/app/immigrate/content/steps";

export function ApplicationSteps() {
  return (
    <div className="flex flex-col justify-between h-full">
      {Steps.map((step) => (
        <div key={step.title} className="">
          <h2 className="text-[16px] text-justify font-normal">{step.title}</h2>
          <p className="text-xs font-normal">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

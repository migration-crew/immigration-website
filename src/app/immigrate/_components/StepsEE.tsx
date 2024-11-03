import { SectionContainer } from "@/components/common/SectionContainer";
import { SubHeading } from "@/components/common/text/SubHeading";
import { EPSteps } from "../content/steps";

export const StepsEEComponent = () => {
  return (
    <SectionContainer className="container mx-auto px-4 py-12">
      <SubHeading>What is the process?</SubHeading>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {EPSteps.map((step, index) => (
          <div key={step.title} className="text-center">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

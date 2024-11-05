import { Caption } from "@/components/common/text/Caption"

type Props = {
    currentStep: number
    totalSteps: number
}

export default function StepCounter({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) {
    return (
        <div className="space-y-2">
            <Caption>Step {currentStep} of {totalSteps}</Caption>
            <div className="flex space-x-2 justify-between">
                {[...Array(totalSteps)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            index + 1 === currentStep ? 'bg-secondary-blue text-primary-white' : 'bg-gray-200'
                        }`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
import { Caption } from "@/components/common/text/Caption"

type Props = {
    currentStep: number
    totalSteps: number
}

export default function StepCounter({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) {
    return (
        <div className="space-y-2">
            <Caption>Step {currentStep} of {totalSteps}</Caption>
            <div className="flex justify-between">
                {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex items-center mx-0">
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${index + 1 === currentStep ? 'bg-secondary-blue text-primary-white' : 'bg-gray-200'
                                }`}
                        >
                            {index + 1}
                        </div>
                        {index < totalSteps - 1 && (
                            <div className="flex-1 h-0.5 w-[103px] bg-gray-200 m-0"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
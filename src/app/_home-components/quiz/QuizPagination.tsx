import { Caption } from "@/components/common/text/Caption";
import { MoveLeft, MoveRight } from "lucide-react"

type Props = {
    currentStep: number
    totalSteps: number
    onNext: () => void
    onBack: () => void
}

export default function QuizPagination({ currentStep, totalSteps, onNext, onBack }: Props) {
    return (
        <div className="flex w-full justify-between">
            <div>
                {currentStep > 1 && 
                <div className="flex items-center space-x-2">
                    <MoveLeft className="h-3 w-3 text-primary-black"/>
                    <button onClick={onBack}><Caption className="text-primary-black">Back</Caption></button>
                </div>
                }
            </div>
            <div>
                {currentStep < totalSteps && 
                <div className="flex items-center space-x-2">
                    <button onClick={onNext}><Caption className="text-secondary-blue">Next</Caption></button>
                    <MoveRight className="h-3 w-3 text-secondary-blue"/>
                </div>
                }
            </div>
        </div>
    )
}
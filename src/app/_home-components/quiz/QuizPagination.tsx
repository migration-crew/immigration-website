import { Caption } from "@/components/common/text/Caption";
import { Button } from "@/components/ui/UpImmigrationButton";

type Props = {
    currentStep: number
    totalSteps: number
    onNext: () => void
    onBack: () => void
}

export default function QuizPagination({ currentStep, totalSteps, onNext, onBack }: Props) {
    return (
        <div className="flex justify-between">
            <div>
                {currentStep > 1 && <Button onClick={onBack}><Caption>Back</Caption></Button>}
            </div>
            <div>
                {currentStep < totalSteps && <Button onClick={onNext}><Caption>Next</Caption></Button>}
            </div>
        </div>
    )
}
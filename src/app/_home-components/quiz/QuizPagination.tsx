import { Caption } from "@/components/common/text/Caption";
import { Button } from "@/components/ui/UpImmigrationButton";

type Props = {
    currentStep: number
    totalSteps: number
}

export default function QuizPagination({ currentStep, totalSteps }: Props) {
    return (
        <div className="flex justify-between">
            <div>
                {currentStep > 1 && <Button><Caption>Back</Caption></Button>}
            </div>
            <div>
                {currentStep < totalSteps && <Button><Caption>Next</Caption></Button>}
            </div>
        </div>
    )
}
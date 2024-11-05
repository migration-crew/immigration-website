import { Caption } from "@/components/common/text/Caption"

type Props = {
    currentStep: number
    totalSteps: number
}

export default function StepCounter({ currentStep, totalSteps }: Props) {
    return (
        <Caption>{`Step ${currentStep} of ${totalSteps}`}</Caption>
    )
}
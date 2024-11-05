"use client";
import { Title } from "@/components/common/text/Title"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/QuizDialog"
import { Button } from "@/components/ui/UpImmigrationButton"
import StepCounter from "./StepCounter"
import { CtaButton } from "@/components/common/text/CtaButton"
import AnswerButtons from "./AnswerButtons"
import QuizPagination from "./QuizPagination"
import { useState } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"

export type QuizType = {
    id: number
    question: string
    answers: string[]
}

type Props = {
    quiz: QuizType[]
    isOpen: boolean
    onClose: () => void
}

export default function QuizDialog({ quiz, isOpen, onClose }: Props) {
    const [currentStep, setCurrentStep] = useState(1)

    const handleNext = () => {
        if (currentStep < quiz.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex justify-between items-center">
                            <StepCounter currentStep={currentStep} totalSteps={quiz.length} />
                            <button onClick={onClose}><Cross2Icon className="h-7 w-7"/></button>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <CtaButton>{quiz[currentStep - 1]?.question}</CtaButton>
                <AnswerButtons answers={quiz[currentStep - 1]?.answers || []} />
                <DialogFooter className="sm:justify-start">
                    <QuizPagination
                        currentStep={currentStep}
                        totalSteps={quiz.length}
                        onNext={handleNext}
                        onBack={handleBack}
                    />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
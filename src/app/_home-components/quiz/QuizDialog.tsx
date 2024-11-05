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
import { SubHeading } from "@/components/common/text/SubHeading";
import { Heading } from "@/components/common/text/Heading";
import expressEntry from "@/public/expressEntry.jpg";
import { HeavyBody } from "@/components/common/text/HeavyBody";
import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import Image from "next/image";

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
    const [isOpenResult, setIsOpenResult] = useState(false)

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

    const handleOnGoLast = () => {
        setIsOpenResult(true);
    }

    const handleLastClose = () => {
        onClose();
        setCurrentStep(1);
        setIsOpenResult(false);
    }

    const handleOnClose = () => {
        onClose();
        setCurrentStep(1);
    }

    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-md xl:h-[600px]">
                {isOpenResult ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="mt-5">
                                <button onClick={handleLastClose}><Cross2Icon className="fixed right-5 top-5 h-7 w-7" /></button>
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-3">
                            <SubHeading>Your pathway option could be...</SubHeading>
                            <Heading>Express Entry</Heading>
                            <HeavyBody>You might be eligible for Express Entry. Find out more by talking with our consultant!</HeavyBody>
                            <Image
                                src={expressEntry}
                                alt="expressEntry"
                                objectFit="cover"
                                quality={100}
                                width={380}
                                height={200}
                            />
                        </div>
                        <DialogFooter className="sm:justify-start">
                            <BookFreeConsultation className="w-full"/>
                        </DialogFooter>
                    </>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="mt-10">
                                <button onClick={handleOnClose}><Cross2Icon className="fixed right-5 top-5 h-7 w-7" /></button>
                                <StepCounter currentStep={currentStep} totalSteps={quiz.length} />
                            </DialogTitle>
                        </DialogHeader>
                        <CtaButton className="mt-5">{quiz[currentStep - 1]?.question}</CtaButton>
                        <AnswerButtons answers={quiz[currentStep - 1]?.answers || []} />
                        <DialogFooter className="sm:justify-start mt-16">
                            <QuizPagination
                                currentStep={currentStep}
                                totalSteps={quiz.length}
                                onNext={handleNext}
                                onBack={handleBack}
                                onGoLast={handleOnGoLast}
                            />
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );

}
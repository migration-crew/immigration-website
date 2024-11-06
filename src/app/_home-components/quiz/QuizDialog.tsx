"use client";
import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { CtaButton } from "@/components/common/text/CtaButton";
import { Heading } from "@/components/common/text/Heading";
import { HeavyBody } from "@/components/common/text/HeavyBody";
import { SubHeading } from "@/components/common/text/SubHeading";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/QuizDialog";
import expressEntry from "@/public/expressEntry.jpg";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import AnswerButtons from "./AnswerButtons";
import QuizPagination from "./QuizPagination";
import StepCounter from "./StepCounter";

export type QuizType = {
  id: number;
  question: string;
  answers: string[];
};

type Props = {
  quiz: QuizType[];
  isOpen: boolean;
  onClose: () => void;
};

export default function QuizDialog({ quiz, isOpen, onClose }: Props) {
  const t = useTranslations("Home");

  const [currentStep, setCurrentStep] = useState(1);
  const [isOpenResult, setIsOpenResult] = useState(false);

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
  };

  const handleLastClose = () => {
    onClose();
    setCurrentStep(1);
    setIsOpenResult(false);
  };

  const handleOnClose = () => {
    onClose();
    setCurrentStep(1);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="h-[600px] xl:h-[600px]">
        {isOpenResult ? (
          <>
            <DialogHeader>
              <DialogTitle className="mt-5">
                <button onClick={handleLastClose}>
                  <Cross2Icon className="fixed right-5 top-5 h-7 w-7" />
                </button>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <SubHeading>{t("pathwayOption")}</SubHeading>
              <Heading>{t("expressEntry")}</Heading>
              <HeavyBody>{t("pathwayDescription")}</HeavyBody>
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
              <BookFreeConsultation className="w-full" />
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="mt-10">
                <button onClick={handleOnClose}>
                  <Cross2Icon className="fixed right-5 top-5 h-7 w-7" />
                </button>
                <StepCounter
                  currentStep={currentStep}
                  totalSteps={quiz.length}
                />
              </DialogTitle>
            </DialogHeader>
            <CtaButton className="mt-5">
              {quiz[currentStep - 1]?.question}
            </CtaButton>
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

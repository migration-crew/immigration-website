"use client";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/QuizDialog";
import { useState } from "react";
import Quiz from "./Quiz";
import QuizResult from "./QuizResult";

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
          <QuizResult onClose={handleLastClose} />
        ) : (
          <Quiz
            quiz={quiz}
            currentStep={currentStep}
            onClose={handleOnClose}
            onNext={handleNext}
            onBack={handleBack}
            onGoLast={handleOnGoLast}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

import { QuizType } from "./QuizDialog";
import {
    DialogFooter,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/QuizDialog";
import { CtaButton } from "@/components/common/text/CtaButton";
import { Cross2Icon } from '@radix-ui/react-icons';
import AnswerButtons from './AnswerButtons';
import QuizPagination from './QuizPagination';
import StepCounter from './StepCounter';

type Props = {
    quiz: QuizType[];
    currentStep: number;
    onClose: () => void;
    onNext: () => void;
    onBack: () => void;
    onGoLast: () => void;
}

export default function Quiz({ quiz, currentStep, onClose, onNext, onBack, onGoLast }: Props) {
    return (
        <>
            <DialogHeader>
                <DialogTitle className="mt-10">
                    <button onClick={onClose}>
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
                    onNext={onNext}
                    onBack={onBack}
                    onGoLast={onGoLast}
                />
            </DialogFooter>
        </>
    )

}

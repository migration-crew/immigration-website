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

export type QuizType = {
    id: number
    question: string
    answers: string[]
}

type Props = {
    quiz: QuizType[]
}

export default function QuizDialog({ quiz }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Title className="text-[36px] cursor-pointer">Start Quiz!</Title>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle><StepCounter currentStep={1} totalSteps={quiz.length}/></DialogTitle>
                </DialogHeader>
                <CtaButton>What would you like to do in Canada?</CtaButton>
                <AnswerButtons answers={["Study", "Work", "Immigrate"]}/>
                <DialogFooter className="sm:justify-start">
                    <QuizPagination currentStep={1} totalSteps={5}/>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
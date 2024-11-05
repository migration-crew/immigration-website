import { Button } from "@/components/ui/UpImmigrationButton"

type Props = {
    answers: string[]
}

export default function AnswerButtons({ answers }: Props) {
    return (
        <div>
            {answers.map((answer, index) => (
                <Button key={index} className="w-full mt-2">
                    {answer}
                </Button>
            ))}
        </div>
    )
}
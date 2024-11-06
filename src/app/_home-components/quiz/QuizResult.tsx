import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/QuizDialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Heading } from "@/components/common/text/Heading";
import { HeavyBody } from "@/components/common/text/HeavyBody";
import { SubHeading } from "@/components/common/text/SubHeading";
import Image from "next/image";
import expressEntry from "@/public/expressEntry.jpg";
import { useTranslations } from "next-intl";
import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";

type Props = {
    onClose: () => void;
}

export default function QuizResult({ onClose }: Props) {
    const t = useTranslations("Home");

    return (
        <>
            <DialogHeader>
                <DialogTitle className="mt-5">
                    <button onClick={onClose}>
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
    )
}
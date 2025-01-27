import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { Heading } from "@/components/common/text/Heading";
import { HeavyBody } from "@/components/common/text/HeavyBody";
import { SubHeading } from "@/components/common/text/SubHeading";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/QuizDialog";
import expressEntry from "@/public/expressEntry.jpg";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

type Props = {
  onClose: () => void;
};

export default function QuizResult({ onClose }: Props) {
  const t = useTranslations("Home");

  return (
    <>
      <DialogHeader>
        <DialogTitle className="mt-5">
          <button onClick={onClose}>
            <Cross2Icon className="fixed right-5 top-5 h-7 w-7 " />
          </button>
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-3">
        <SubHeading>{t("pathwayOption")}</SubHeading>
        <Heading>{t("expressEntry")}</Heading>
        <HeavyBody>{t("pathwayDescription")}</HeavyBody>
        <ResponsiveImage
          alt="expressEntry"
          src={expressEntry}
          divClassName="h-[220px] w-full"
        />
      </div>
      <DialogFooter className="sm:justify-start">
        <BookFreeConsultation className="w-full" />
      </DialogFooter>
    </>
  );
}

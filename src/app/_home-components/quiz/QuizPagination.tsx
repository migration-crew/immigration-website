import { Caption } from "@/components/common/text/Caption";
import { MoveLeft, MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onGoLast: () => void;
};

export default function QuizPagination({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  onGoLast,
}: Props) {
  const t = useTranslations("Home");

  const handleNextClick = () => {
    if (currentStep === totalSteps) {
      onGoLast();
    } else {
      onNext();
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div>
        {currentStep > 1 && (
          <div className="flex items-center space-x-2">
            <MoveLeft className="h-3 w-3 text-primary-black" />
            <button onClick={onBack}>
              <Caption className="text-primary-black">
                {t("backButton")}
              </Caption>
            </button>
          </div>
        )}
      </div>
      <div>
        {currentStep <= totalSteps && (
          <div className="flex items-center space-x-2">
            <button onClick={handleNextClick}>
              <Caption className="text-secondary-blue">
                {t("nextButton")}
              </Caption>
            </button>
            <MoveRight className="h-3 w-3 text-secondary-blue" />
          </div>
        )}
      </div>
    </div>
  );
}

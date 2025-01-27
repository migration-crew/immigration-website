import { Caption } from "@/components/common/text/Caption";
import { useTranslations } from "next-intl";

type Props = {
  currentStep: number;
  totalSteps: number;
};

export default function StepCounter({ currentStep, totalSteps }: Props) {
  const t = useTranslations("Home");

  return (
    <div className="space-y-3 flex flex-col items-start">
      <Caption>
        {t("stepSpan")} {currentStep} {t("ofSpan")} {totalSteps}
      </Caption>
      <div className="flex justify-between">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="flex items-center mx-0">
            <div
              key={index}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-primary-white ${
                index + 1 === currentStep
                  ? "bg-secondary-blue"
                  : "bg-disabled-black"
              }`}
            >
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className="flex-1 h-0.5 w-[77px] sm:w-[103px] bg-disabled-black m-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

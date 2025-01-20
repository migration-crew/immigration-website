import { StepsType } from "@/types/StepsType";
import { useTranslations } from "next-intl";

// Component or function to retrieve steps
export const Steps = (): StepsType[] => {
  const t = useTranslations("ImmigrationSteps");

  return [
    {
      title: t("step1Title"),
      description: t("step1Description"),
    },
    {
      title: t("step2Title"),
      description: t("step2Description"),
    },
    {
      title: t("step3Title"),
      description: t("step3Description"),
    },
    {
      title: t("step4Title"),
      description: t("step4Description"),
    },
    {
      title: t("step5Title"),
      description: t("step5Description"),
    },
  ];
};

export const EPSteps = (): StepsType[] => {
  const t = useTranslations("ExpressEntrySteps");

  return [
    {
      title: t("step1Title"),
      description: t("step1Description"),
    },
    {
      title: t("step2Title"),
      description: t("step2Description"),
    },
    {
      title: t("step3Title"),
      description: t("step3Description"),
    },
    {
      title: t("step4Title"),
      description: t("step4Description"),
    },
    {
      title: t("step5Title"),
      description: t("step5Description"),
    },
  ];
};

import { useTranslations } from "next-intl";
import { QuizType } from "./QuizDialog";

//function name should be uppercase
export const QuizData = (): QuizType[] => {
  const t = useTranslations("Home");
  return [
    {
      id: 1,
      question: t("question1"),
      answers: [
        t("question1Answer1"),
        t("question1Answer2"),
        t("question1Answer3"),
        t("question1Answer4"),
      ],
    },
    {
      id: 2,
      question: t("question2"),
      answers: [
        t("question2Answer1"),
        t("question2Answer2"),
        t("question2Answer3"),
        t("question2Answer4"),
      ],
    },
    {
      id: 3,
      question: t("question3"),
      answers: [t("question3Answer1"), t("question3Answer2")],
    },
    {
      id: 4,
      question: t("question4"),
      answers: [t("question4Answer1"), t("question4Answer2")],
    },
  ];
};

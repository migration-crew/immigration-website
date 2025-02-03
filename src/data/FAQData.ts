import { QAItem } from "@/types/FAQ";
import { useTranslations } from "next-intl";

export const QAGeneralData = (): QAItem[] => {
  const t = useTranslations("FAQGeneralData");
  return [
    {
      id: "q1",
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      id: "q2",
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      id: "q3",
      question: t("question3"),
      answer: t("answer3"),
    },
  ];
};

export const FAQs = (): QAItem[] => {
  const t = useTranslations("FAQs");
  return [
    {
      id: "1",
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      id: "2",
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      id: "3",
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      id: "4",
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      id: "5",
      question: t("question5"),
      answer: t("answer5"),
    },
    {
      id: "6",
      question: t("question6"),
      answer: t("answer6"),
    },
  ];
};

export const PNPFAQs = (): QAItem[] => {
  const t = useTranslations("FAQPNPData");
  return [
    {
      id: "1",
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      id: "2",
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      id: "3",
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      id: "4",
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      id: "5",
      question: t("question5"),
      answer: t("answer5"),
    },
    {
      id: "6",
      question: t("question6"),
      answer: t("answer6"),
    },
  ];
};

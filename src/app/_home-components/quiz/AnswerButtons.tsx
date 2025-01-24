"use client";
import { Button } from "@/components/ui/UpImmigrationButton";
import { useTranslations } from "next-intl";
import { useState } from "react";

type Props = {
  answers: string[];
};

export default function AnswerButtons({ answers }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const t = useTranslations("Home");

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {answers.map((answer, index) => (
        <Button
          variant={selectedIndex === index ? "default" : "outline"}
          key={index}
          className="xl:w-40 mt-2 w-40"
          onClick={() => handleClick(index)}
        >
          {t(answer)}
        </Button>
      ))}
    </div>
  );
}

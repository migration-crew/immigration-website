"use client";
import { Button } from "@/components/ui/UpImmigrationButton";
import { useState } from "react";

type Props = {
  answers: string[];
};

export default function AnswerButtons({ answers }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {answers.map((answer, index) => (
        <Button
          variant={selectedIndex === index ? "default" : "outline"}
          key={index}
          className="mt-2 w-36"
          onClick={() => handleClick(index)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
}

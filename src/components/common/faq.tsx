"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/FAQaccordion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QAItem } from "@/data/FAQData";
import { useState } from "react";

type Props = {
  data: QAItem[]
}

const FAQ = ({data}:Props) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };
  return (
    <section className="container mx-auto py-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">FAQ</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {data.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger onClick={() => toggleItem(item.id)}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </section>
  );
};

export default FAQ;

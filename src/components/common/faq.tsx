import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/FAQaccordion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QAItem } from "@/data/FAQData";

type Props = {
  data: QAItem[];
};

const FAQ = ({ data }: Props) => {
  return (
    <section className="container mx-auto py-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">FAQ</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          {data.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </section>
  );
};

export default FAQ;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/FAQaccordion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QAItem } from "@/types/FAQ";

type Props = {
  data: QAItem[];
};

const FAQ = ({ data }: Props) => {
  return (
    <section className="container mx-auto py-8">
      <CardHeader>
        <CardTitle className="text-heading-mobile lg:text-heading test">
          FAQ
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          {data.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{`${index + 1}. ${
                item.question
              }`}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </section>
  );
};

export default FAQ;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/FAQaccordion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QAItem } from "@/data/FAQData";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";

type Props = {
  data: QAItem[];
  title: string;
  bgColor?: string | undefined;
  className?: string | undefined;
};

/**
 * FAQ section
 * @param data - pass FAQ data
 * @param title - pass title
 * @param bgColor - pass background color
 * @param className - pass custom classes to section container of faq component
 * @example
 * ```tsx
 *  <FAQ
      data={qaGeneralData}
      title="FAQ"
      bgColor="bg-neutral-secondary-white"
      className="py-8"
    />
 * ```
 */
const FAQ = ({ data, title, bgColor, className }: Props) => {
  return (
    <SectionContainer bgColor={cn(bgColor)} className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-heading-mobile xl:text-heading test">
          {title}
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
    </SectionContainer>
  );
};

export default FAQ;

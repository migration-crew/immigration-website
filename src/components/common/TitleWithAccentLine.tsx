import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";
import { Heading } from "./text/Heading";
import { Paragraph } from "./text/Paragraph";

type Props = {
  title: string;
  text: string;
  children: React.ReactNode;
  className?: string | undefined;
};

export const TitleWithAccentLine = ({
  title,
  text,
  children,
  className,
}: Props) => {
  return (
    <SectionContainer className={cn("pb-[26px]", className)}>
      <Heading className="pb-3">{title} </Heading>
      <div className="bg-primary-red w-[50px] h-[2.5px]"></div>
      <Paragraph className="pt-4">{text}</Paragraph>
      {children}
    </SectionContainer>
  );
};

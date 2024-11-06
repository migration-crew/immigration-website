import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";


type Props = {
  icon: React.ReactNode;
  num: string;
  text: string;
};

export const Strength = ({ icon, num, text }: Props) => {
  return (
    <div className="text-center flex flex-col items-center justify-start">
      <div className="pb-12 flex justify-center">{icon}</div>
      <div>
        <Heading className="text-primary-red">{num}</Heading>
        <Paragraph>{text}</Paragraph>
      </div>
    </div>
  );
};

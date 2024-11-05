import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { HeavySubHeader } from "@/components/common/text/HeavySubHeader";
import { Button } from "@/components/ui/UpImmigrationButton";
import { StepsType } from "@/types/StepsType";
import Link from "next/link";

type Props = {
  steps: StepsType[];
  title: string;
};

export const StepsComponent = ({ steps, title }: Props) => {
  return (
    <SectionContainer className="py-[100px] hidden lg:block">
      <Heading>{title}</Heading>
      <div className="relative py-8">
        <div className="absolute mt-[13px] left-0 right-0 h-[2px] w-[908px] bg-secondary-blue mx-auto hidden lg:block" />
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-7 h-7 bg-secondary-blue text-white rounded-full flex items-center justify-center font-bold mb-6 relative mx-auto">
                {index + 1}
              </div>
              <HeavySubHeader className="mb-[17px]">
                {step.title}
              </HeavySubHeader>
              <p className="text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button>
          <Link href="/book-consultation">
            Book a free initial consultation
          </Link>
        </Button>
      </div>
    </SectionContainer>
  );
};

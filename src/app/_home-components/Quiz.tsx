import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Title } from "@/components/common/text/Title";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import startQuiz from "@/public/startQuiz.png";
import { ArrowRight } from 'lucide-react';

export const Quiz = () => {
  return (
    <SectionContainer className="py-10 xl:py-[50px]" bgColor="bg-neutral-secondary-white">
      <Heading>
        Take the Quiz to find your immigration pathway!
      </Heading>

      <p className="py-4">
        By taking this quiz, you will discover which immigration pathway best
        fits your unique situation.
      </p>

      <Card className="flex flex-col h-[398px] xl:h-[602px]">
        <CardHeader className="bg-secondary-blue-op-20 rounded-t-xl h-[306px] xl:h-[474px] pb-0 flex justify-end items-center">
          <ResponsiveImage
            alt="startQuiz"
            src={startQuiz}
            divClassName="h-[300px] w-[350px] xl:h-[400px] xl:w-[500px]"
          ></ResponsiveImage>
        </CardHeader>
        <CardFooter className="bg-primary-red flex-1 rounded-b-xl p-4 xl:p-6 flex justify-between xl:justify-center text-primary-white">
          <Title className="text-[36px]">Start Quiz!</Title>
          <ArrowRight size={36} strokeWidth={4} className="xl:hidden"/>
          <ArrowRight size={48} strokeWidth={4} className="hidden xl:block ml-2"/>
        </CardFooter>
      </Card>
    </SectionContainer>
  );
};

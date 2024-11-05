import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import CAPIC from "@/public/CAPICLogo.png";
import RCIC from "@/public/RCICLogo.png";
import { Award, BriefcaseBusiness, Heart, User } from "lucide-react";
import Image from "next/image";
import { Strength } from "./Strength";

export const OurStrength = () => {
  const iconSize = 59;
  return (
    <SectionContainer className="py-10 xl:py-0" bgColor="bg-neutral-secondary-white xl:bg-inherit">
      <Heading>Our strengths</Heading>
      <div className="pt-4 pb-8 grid xl:grid-cols-2 xl:gap-y-4 xl:gap-x-6 gap-6">
        <Strength
          icon={<User size={iconSize} />}
          title="Personalized consultation"
          text="Let’s start from a free initial consultation to figure out what would be the best immigration pathway for you together."
          order="order-1"
        />
        <Strength
          icon={<BriefcaseBusiness size={iconSize} />}
          title="HR and LMIA expertise "
          text="Benefit from over 5 years of experience in HR and expert guidance on obtaining LMIA, ensuring a smooth work experience in Canada."
          order="xl:order-3 order-2"
        />
        <Strength
          icon={<Heart size={iconSize} />}
          title="Compassionate support"
          text="Experience a compassionate, welcoming approach, making your immigration journey more simple and supportive."
          order="xl:order-2 order-3"
        />
        <Strength
          icon={<Award size={iconSize} />}
          title="Our credentials"
          text="Proudly regulated by and in good standing with the College of Immigration and Citizenship Consultants. Larissa Castelluber"
          order="order-4"
        />
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:justify-start ">
        <Image alt="RCIC" src={RCIC} className="h-[62px] xl:h-[81px] w-auto" />
        <Image alt="CAPIC" src={CAPIC} className="h-[62px] xl:h-[81px] w-auto mt-4 xl:mt-0 xl:ml-14 " />
      </div>
    </SectionContainer>
  );
};

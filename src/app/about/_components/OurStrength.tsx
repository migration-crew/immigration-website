import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import CAPIC from "@/public/CAPICLogo.png";
import RCIC from "@/public/RCICLogo.png";
import { Award, BriefcaseBusiness, Heart, User } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Strength } from "./Strength";

export const OurStrength = () => {
  const iconSize = 59;
  const t = useTranslations("AboutUs");
  return (
    <SectionContainer
      className="py-10 xl:py-0"
      bgColor="bg-neutral-secondary-white xl:bg-inherit"
    >
      <Heading>{t("section3Title")}</Heading>
      <div className="pt-4 pb-8 grid xl:grid-cols-2 xl:gap-y-4 xl:gap-x-6 gap-6">
        <Strength
          icon={<User size={iconSize} />}
          title={t("section3Sub1")}
          text={t("section3P1")}
          order="order-1"
        />
        <Strength
          icon={<BriefcaseBusiness size={iconSize} />}
          title={t("section3Sub2")}
          text={t("section3P2")}
          order="xl:order-3 order-2"
        />
        <Strength
          icon={<Heart size={iconSize} />}
          title={t("section3Sub3")}
          text={t("section3P3")}
          order="xl:order-2 order-3"
        />
        <Strength
          icon={<Award size={iconSize} />}
          title={t("section3Sub4")}
          text={t("section3P4")}
          order="order-4"
        />
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:justify-start ">
        <Image alt="RCIC" src={RCIC} className="h-[62px] xl:h-[81px] w-auto" />
        <Image
          alt="CAPIC"
          src={CAPIC}
          className="h-[62px] xl:h-[81px] w-auto mt-4 xl:mt-0 xl:ml-14 "
        />
      </div>
    </SectionContainer>
  );
};

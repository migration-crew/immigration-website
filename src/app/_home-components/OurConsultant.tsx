import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import CICCLogo from "@/public/CICCLogo.png";
import Larissa from "@/public/Larissa.png";
import { useTranslations } from "next-intl";

export const OurConsultant = () => {
  const t = useTranslations("Home");

  return (
    <SectionContainer
      className="pt-[100px] pb-[50px] xl:flex"
      bgColor="bg-neutral-secondary-white"
    >
      <div className="max-w-[640px]">
        <Heading>{t("ourConsultant")}</Heading>

        <SubHeading className="py-4 xl:pb-0">Larissa Castelluber</SubHeading>
        <ResponsiveImage
          alt="Larissa"
          src={Larissa}
          divClassName="max-w-[398px] h-[316px] xl:hidden"
          imgClassName="rounded-3xl"
        />
        <Paragraph className="py-4 pb-8 xl:py-8">
          {t("ourConsultantDescription")}
        </Paragraph>
        <div className="flex justify-between items-end">
          <div>
            <Paragraph>{t("registry")}: R710678</Paragraph>
            <Paragraph className="text-[#E92736]">
              {t("verified")} ICCRC
            </Paragraph>
          </div>
          <ResponsiveImage
            alt="CICCLogo"
            src={CICCLogo}
            divClassName="w-[185px] h-[45px] xl:w-[309px] xl:h-[75px]"
          />
        </div>
      </div>
      <ResponsiveImage
        alt="Larissa"
        src={Larissa}
        divClassName="w-[398px] h-[316px] ml-[42px] hidden xl:block"
        imgClassName="rounded-3xl"
      />
    </SectionContainer>
  );
};

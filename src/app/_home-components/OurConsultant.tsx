import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import CICCLogo from "@/public/CICCLogo.png";
import Larissa from "@/public/Larissa.png";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";

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
        <div className="relative max-w-[398px] h-[316px] xl:hidden">
          <Image
            alt="Larissa"
            src={Larissa}
            layout={"fill"}
            objectFit={"cover"}
            className="rounded-3xl"
          />
        </div>
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
          <div className="relative w-[185px] h-[45px] xl:w-[309px] xl:h-[75px]">
            <Image
              alt="CICCLogo"
              src={CICCLogo}
              layout={"fill"}
              objectFit={"cover"}
            />
          </div>
        </div>
      </div>
      <div className="relative w-[398px] h-[316px] ml-[42px] hidden xl:block">
        <Image
          alt="Larissa"
          src={Larissa}
          layout={"fill"}
          objectFit={"cover"}
          className="rounded-3xl"
        />
      </div>
    </SectionContainer>
  );
};

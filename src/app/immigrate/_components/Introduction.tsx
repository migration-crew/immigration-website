import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { useTranslations } from "next-intl";

export const Introduction = () => {
  const t = useTranslations("IntroductionImmigrate");
  return (
    <SectionContainer className="py-10">
      <Heading>{t("heading")}</Heading>
      {/* The font sinze from mobile is 20px, however Im using Heading component which uses 24px */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 py-4">
        <Paragraph className=" text-justify w-[100%]">
          {t("paragraph1")}
        </Paragraph>

        <Paragraph className=" text-justify w-[100%]">
          {t("paragraph2")}
        </Paragraph>
      </div>
      <BookFreeConsultation />
    </SectionContainer>
  );
};

import { SectionContainer } from "@/components/common/SectionContainer";
import immigrate from "@/public/immigrateLink.png";
import study from "@/public/studyLink.png";
import work from "@/public/workLink.png";
import { useTranslations } from "next-intl";
import { NavCard } from "./NavCard";

export const CanadianImmigrationServices = () => {
  const t = useTranslations("Home");

  return (
    <SectionContainer className="py-[40px] xl:py-[50px]">
      <h2 className="pb-6 text-heading-mobile xl:text-heading">
        {t("immigrationServices")}
      </h2>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
        <NavCard
          alt="immigrate"
          src={immigrate}
          title={t("immigrateTitle")}
          text={t("immigrateDescription")}
          href="/immigrate"
        />
        <NavCard
          alt="work"
          src={work}
          title={t("workTitle")}
          text={t("workDescription")}
          href="/work"
        />
        <NavCard
          alt="study"
          src={study}
          title={t("studyTitle")}
          text={t("studyDescription")}
          href="/study"
        />
      </div>
    </SectionContainer>
  );
};

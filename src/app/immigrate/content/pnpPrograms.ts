import { useTranslations } from "next-intl";

type ProgramsType = {
  title: string;
  description: string;
};

export const PNPPrograms = (): ProgramsType[] => {
  const t = useTranslations("ProvincesAndTerritories");
  return [
    {
      title: t("Ontario"),
      description: t("OntarioDescription"),
    },
    {
      title: t("BritishColumbia"),
      description: t("BritishColumbiaDescription"),
    },
    {
      title: t("Alberta"),
      description: t("AlbertaDescription"),
    },
    {
      title: t("Manitoba"),
      description: t("ManitobaDescription"),
    },
    {
      title: t("Saskatchewan"),
      description: t("SaskatchewanDescription"),
    },
    {
      title: t("NovaScotia"),
      description: t("NovaScotiaDescription"),
    },
    {
      title: t("NewBrunswick"),
      description: t("NewBrunswickDescription"),
    },
    {
      title: t("PrinceEdwardIsland"),
      description: t("PrinceEdwardIslandDescription"),
    },
    {
      title: t("NewfoundlandAndLabrador"),
      description: t("NewfoundlandAndLabradorDescription"),
    },
    {
      title: t("NorthwestTerritories"),
      description: t("NorthwestTerritoriesDescription"),
    },
    {
      title: t("Yukon"),
      description: t("YukonDescription"),
    },
    {
      title: t("Nunavut"),
      description: t("NunavutDescription"),
    },
  ];
};

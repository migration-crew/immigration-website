import LanguageSwitcher from "@/components/common/LocaleSwitcher";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { BookFreeConsultation } from "../../components/common/BookFreeConsultation";
import HamburgerMenu from "./_components/HamburgerMenu";
import LogoButton from "./_components/LogoButton";
import NavigationMenuForDesktop from "./_components/NavigationMenuForDesktop";

export type HeaderComponent = {
  title: string;
  href: string;
};

export default function Header() {
  const t = useTranslations("NavigationMenu");

  const urlPrefix = "/immigrate";

  const immigrateComponents: HeaderComponent[] = [
    { title: t("immigrateToCanada"), href: `${urlPrefix}` },
    { title: t("expressEntry"), href: `${urlPrefix}/express-entry` },
    { title: t("provincialNomineeProgram"), href: `${urlPrefix}/pnp` },
    { title: t("familySponsorship"), href: `${urlPrefix}/family` },
    { title: t("caregiversPrograms"), href: `${urlPrefix}/caregiver` },
    { title: t("startUpVisa"), href: `${urlPrefix}/start-up` },
    { title: t("selfEmployedProgram"), href: `${urlPrefix}/self-employed` },
    {
      title: t("HumanitarianANdCompassionate"),
      href: `${urlPrefix}/humanitarian`,
    },
    { title: t("atlanticImmigrationProgram"), href: `${urlPrefix}/atlantic` },
    { title: t("northernImmigrationProgram"), href: `${urlPrefix}/rnip` },
  ];

  const workComponents: HeaderComponent[] = [
    { title: t("workInCanada"), href: "/work" },
    { title: t("labourMarketImpactAssessment"), href: "/lmia" },
    { title: t("postGraduationWorkPermit"), href: "/pgwp" },
    { title: t("otherPermits"), href: "/others" },
  ];

  const classNameForDesktop = cn("hidden xl:flex");
  const classNameForMobile = cn("flex xl:hidden");

  return (
    <header className="px-6 py-2 bg-primary-white fixed z-50 top-0 w-full h-[72px]">
      <div className="flex items-center justify-between h-full">
        <LogoButton />
        {/* For Desktop */}
        <NavigationMenuForDesktop
          className={classNameForDesktop}
          immigrateComponents={immigrateComponents}
          workComponents={workComponents}
        />
        <div className={`flex space-x-5 items-center ${classNameForDesktop}`}>
          <LanguageSwitcher className={classNameForDesktop} />
          <BookFreeConsultation className={classNameForDesktop} />
        </div>
        {/* For Mobile */}
        <div className={`flex space-x-5 items-center ${classNameForMobile}`}>
          <LanguageSwitcher className={classNameForMobile} />
          <HamburgerMenu
            className={classNameForMobile}
            immigrateComponents={immigrateComponents}
            workComponents={workComponents}
          />
        </div>
      </div>
    </header>
  );
}

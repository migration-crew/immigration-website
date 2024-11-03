import { useTranslations } from 'next-intl'
import { BookFreeConsultation } from '../../components/common/BookFreeConsultation'
import LogoButton from './_components/LogoButton'
import NavigationMenuForDesktop from './_components/NavigationMenuForDesktop'
import HamburgerMenu from './_components/HamburgerMenu'
import { cn } from "@/lib/utils";

export type HeaderComponent = {
    title: string
    href: string
}

export default function Header() {
    const t = useTranslations("NavigationMenu")

    const immigrateComponents: HeaderComponent[] = [
        { title: t("immigrateToCanada"), href: "/immigrate" },
        { title: t("expressEntry"), href: "/express-entry" },
        { title: t("provincialNomineeProgram"), href: "/investors-entrepreneurs" },
        { title: t("familySponsorship"), href: "/family" },
        { title: t("caregiversPrograms"), href: "/caregiver" },
        { title: t("investorsEntrepreneurs"), href: "/investors-entrepreneurs" },
        { title: t("otherPrograms"), href: "/others" },
    ]

    const workComponents: HeaderComponent[] = [
        { title: t("workInCanada"), href: "/work" },
        { title: t("labourMarketImpactAssessment"), href: "/lmia" },
        { title: t("postGraduationWorkPermit"), href: "/pgwp" },
        { title: t("otherPermits"), href: "/others" },
    ]

    const classNameForDesktop = cn("hidden lg:flex")
    const classNameForMobile = cn("flex lg:hidden")

    return (
        <header className='pl-6 pt-2.5 pr-6 bg-primary-white'>
            <div className='flex items-center justify-between'>
                <LogoButton />
                {/* For Desktop */}
                <NavigationMenuForDesktop
                    className={classNameForDesktop}
                    immigrateComponents={immigrateComponents}
                    workComponents={workComponents} 
                />
                <BookFreeConsultation
                    className={classNameForDesktop}
                />
                {/* For Mobile */}
                <HamburgerMenu
                    className={classNameForMobile}
                    immigrateComponents={immigrateComponents} 
                    workComponents={workComponents}
                />
            </div>
        </header>
    )
}
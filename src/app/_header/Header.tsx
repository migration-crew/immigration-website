import { useTranslations } from 'next-intl'
import { BookFreeConsultation } from '../../components/common/BookFreeConsultation'
import LogoButton from './_components/LogoButton'
import UpImmigrationNavigationMenu from './_components/UpImmigrationNavigationMenu'

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

    return (
        <header className='ml-6 mt-2.5 mr-6 bg-primary-white'>
            <div className='flex items-center justify-between'>
                <LogoButton />
                <UpImmigrationNavigationMenu immigrateComponents={immigrateComponents} workComponents={workComponents}/>
                <BookFreeConsultation />
            </div>
        </header>
    )
}
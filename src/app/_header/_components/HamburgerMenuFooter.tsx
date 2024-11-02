import { ContactItem } from "@/data/ContactData"
import { useTranslations } from "next-intl"
import { OtherButton } from "@/components/common/text/OtherButton"
import LanguageSwitcher from "@/components/common/LocaleSwitcher"

type Props = {
    components: ContactItem[]
}

export default function HamburgerMenuFooter({ components }: Props) {
    const t = useTranslations("LocaleSwitcher")

    return (
        <div className="fixed bottom-10">
            <div className="flex items-center justify-between mb-5 gap-x-4">
                <OtherButton>{t("language")}</OtherButton>
                <LanguageSwitcher />
            </div>
            <div className="flex space-x-4">
                {components.map((component) => (
                    <a target="_blank" key={component.name} href={component.href}>
                        <component.imageComponent size={35} />
                    </a>
                ))}
            </div>
        </div>
    )
}
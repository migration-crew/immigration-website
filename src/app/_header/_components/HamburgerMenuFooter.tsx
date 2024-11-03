import { ContactItem } from "@/data/ContactData"
import { useTranslations } from "next-intl"

type Props = {
    components: ContactItem[]
}

export default function HamburgerMenuFooter({ components }: Props) {
    const t = useTranslations("LocaleSwitcher")

    return (
        <div className="fixed bottom-10 flex space-x-4">
            {components.map((component) => (
                <a target="_blank" key={component.name} href={component.href}>
                    <component.imageComponent size={35} />
                </a>
            ))}
        </div>
    )
}
import { useTranslations } from "next-intl"
import { Menu } from "../../../components/common/text/Menu"
import { LinksType } from "./PageLinks"
import { Caption } from "@/components/common/text/Caption"
import Link from "next/link"

type Props = {
    link: LinksType
}

export default function SubLinks({ link }: Props) {
    const t = useTranslations("NavigationMenu")

    return (
        <div className="flex flex-col space-y-3">
            <Link href={link.href || "#"}>
                <Menu className="text-primary-white">{t(`${link.title}`)}</Menu>
            </Link>
            {link.links && link.links.map((link) => ((
                <div key={link.name} className="flex flex-col space-y-2">
                    <Link href={link.href}>
                        <Caption className="text-primary-white">{t(`${link.name}`)}</Caption>
                    </Link>
                </div>
            )))}
        </div>
    )
}
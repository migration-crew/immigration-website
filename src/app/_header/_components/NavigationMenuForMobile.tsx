import { useTranslations } from "next-intl"
import { HeaderComponent } from "../Header"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/HamburgerMenuAccordion"
import SubMenu from "./SubMenu"
import Link from "next/link"

type Props = {
    immigrateComponents: HeaderComponent[]
    workComponents: HeaderComponent[]  // It's not used for now, but I kept it for future use
}

export default function NavigationMenuForDesktop({ immigrateComponents, workComponents }: Props) {
    const t = useTranslations("NavigationMenu")

    return (
        <div className="flex flex-col space-y-8 mt-6">
            <Accordion type="single" collapsible className="w-full">
                {/* Immigrate */}
                <AccordionItem value="immigrate">
                    <AccordionTrigger>{t("immigrate")}</AccordionTrigger>
                    <AccordionContent>
                        <SubMenu components={immigrateComponents} />
                    </AccordionContent>
                </AccordionItem>
                {/* Work */}
                {/* <AccordionItem value="work">
                    <AccordionTrigger>{t("work")}</AccordionTrigger>
                    <AccordionContent>
                        <SubMenu components={workComponents} />
                    </AccordionContent>
                </AccordionItem> */}
            </Accordion>
            {/* Work */}
            <Link href="/work" className="text-menu">{t("work")}</Link>
            {/* Study */}
            <Link href="/study" className="text-menu">{t("study")}</Link>
            {/* About us */}
            <Link href="/about" className="text-menu">{t("aboutUs")}</Link>
            {/* Contact */}
            <Link href="/contact" className="text-menu">{t("contact")}</Link>
            {/* Blog (We don't know if it's necessary, so I commented our for now) */}
            {/* <Link href="/blog" className="text-menu">{t("blog")}</Link> */}
            {/* FAQ */}
            <Link href="/faq" className="text-menu">{t("faq")}</Link>
        </div>
    )
}
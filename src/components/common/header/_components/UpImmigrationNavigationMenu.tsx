import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { HeaderComponent } from "../Header"

type Props = {
    immigrateComponents: HeaderComponent[]
    workComponents: HeaderComponent[]
}

export default function UpImmigrationNavigationMenu({immigrateComponents, workComponents}: Props) {
    const t = useTranslations("NavigationMenu")

    return (
        <NavigationMenu>
            <NavigationMenuList className='space-x-9'>
                {/* Immigrate */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("immigrate")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-[300px] lg:w-[300px]">
                            {immigrateComponents.map((component, index) => (
                                <Link key={index} href={component.href}>
                                    {component.title}
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Work */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("work")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {workComponents.map((component, index) => (
                                <Link key={index} href={component.href}>
                                    {component.title}
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Study */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/study">
                        {t("study")}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* About us */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/about">
                        {t("aboutUs")}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Contact */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact">
                        {t("contact")}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Blog */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/blog">
                        {t("blog")}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* FAQ */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/faq">
                        {t("faq")}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
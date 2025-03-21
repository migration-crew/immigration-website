import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/HeaderNavigationMenu";
import { useTranslations } from "next-intl";
import { HeaderComponent } from "../Header";
import SubMenu from "./SubMenu";

type Props = {
  className: string | undefined;
  immigrateComponents: HeaderComponent[];
  workComponents: HeaderComponent[]; // It's not used for now, but I kept it for future use
};

export default function NavigationMenuForDesktop({
  className,
  immigrateComponents,
}: Props) {
  const t = useTranslations("NavigationMenu");

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="space-x-9">
        {/* Immigrate */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("immigrate")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <SubMenu components={immigrateComponents} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Work */}
        {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("work")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <SubMenu components={workComponents}/>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/work" className="text-menu">
            {t("work")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Study */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/study" className="text-menu">
            {t("study")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* About us */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" className="text-menu">
            {t("aboutUs")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className="text-menu">
            {t("contact")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Blog (We don't know if it's necessary, so I commented our for now) */}
        {/* <NavigationMenuItem>
                    <NavigationMenuLink href="/blog" className="text-menu">
                        {t("blog")}
                    </NavigationMenuLink>
                </NavigationMenuItem> */}
        {/* FAQ */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/faq" className="text-menu">
            {t("faq")}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

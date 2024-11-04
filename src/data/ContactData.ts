// Using React Icons not lucide-react because lucide-react does not have new brand icon
// i.e. https://github.com/lucide-icons/lucide/issues/670
import { AiOutlineInstagram as Instagram } from "react-icons/ai";
import { AiOutlineWhatsApp as Whatsapp } from "react-icons/ai";
import { AiOutlineFacebook as Facebook } from "react-icons/ai";
import { AiOutlineLinkedin as LinkedIn } from "react-icons/ai";
import { IconType } from "react-icons/lib";

export type ContactItem = {
    name: string
    href: string
    imageComponent: IconType
}

/**
 * Contact data
 * @remarks Used in the hamburger menu and footer
 * @example
 * ```ts
 * {components.map((component) => (
        <a target="_blank" key={component.name} href={component.href}>
            <component.imageComponent size={35}/>
        </a>
    ))}
 * ```
 */
export const contactData: ContactItem[] = [
    {
        name: "instagram",
        href: "https://www.instagram.com/upimmigration/",
        imageComponent: Instagram
    },
    {
        name: "facebook",
        href: "https://www.facebook.com/upimmigration/",
        imageComponent: Facebook
    },
    {
        name: "linkedin",
        href: "https://www.linkedin.com/company/upimmigration/",
        imageComponent: LinkedIn
    },
    {
        name: "whatsapp",
        href: "https://api.whatsapp.com/send/?phone=16725881360&text&type=phone_number&app_absent=0",
        imageComponent: Whatsapp
    }
]
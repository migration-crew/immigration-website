import SubLinks from "./SubLinks"

type LinkType = {
    name: string
    href: string
}

export type LinksType = {
    title: string
    href?: string
    links?: LinkType[]
}

const servicesLinks: LinksType = {
    title: "services",
    links: [
        { name: "immigrate", href: "/immigrate" },
        { name: "work", href: "/work" },
        { name: "study", href: "/study" },
    ]
}

const companyLinks: LinksType = {
    title: "company",
    links: [
        { name: "aboutUs", href: "/about" },
        { name: "contact", href: "/contact" },
    ]
}

const faqLinks: LinksType = {
    title: "faq",
    href: "/faq",
}

export default function PageLinks() {
    return (
        <div className="flex space-x-14 xl:space-x-60">
            <SubLinks link={servicesLinks} />
            <SubLinks link={companyLinks} />
            <SubLinks link={faqLinks} />
        </div>
    )
}
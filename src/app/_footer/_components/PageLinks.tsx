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
        { name: "immigrate", href: "#" },
        { name: "work", href: "#" },
        { name: "study", href: "#" },
        { name: "sponsor", href: "#" },
    ]
}

const companyLinks: LinksType = {
    title: "company",
    href: "#",
    links: [
        { name: "aboutUs", href: "#" },
        { name: "contact", href: "#" },
    ]
}

const faqLinks: LinksType = {
    title: "faq",
    href: "#",
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
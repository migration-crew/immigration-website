import ContactAndCopyRight from "./_components/ContactAndCopyRight";
import Logo from "./_components/Logo";
import PageLinks from "./_components/PageLinks";

export default function Footer() {
    return (
        <footer className="pl-20 pt-14 pr-20 pb-24 bg-primary-red mt-40 xl:mt-100 xl:flex justify-between">
            <Logo />
            <PageLinks />
            <ContactAndCopyRight />
            {/* <LanguageSwitcher /> */}
        </footer>
    )
}
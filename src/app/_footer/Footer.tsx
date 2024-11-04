import LanguageSwitcher from "../../components/common/LocaleSwitcher";
import Logo from "./_components/Logo";
import PageLinks from "./_components/PageLinks";

export default function Footer() {
    return (
        <footer className="pl-6 pt-14 pr-6 pb-32 bg-primary-red mt-40 xl:mt-100 xl:flex">
            <Logo />
            <PageLinks />
            {/* <LanguageSwitcher /> */}
        </footer>
    )
}
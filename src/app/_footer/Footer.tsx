import ContactAndCopyRight from "./_components/ContactAndCopyRight";
import Logo from "./_components/Logo";
import PageLinks from "./_components/PageLinks";

export default function Footer() {
  return (
    <footer className="p-5 bg-primary-red mt-0 justify-between items-center space-y-5 xl:pl-20 xl:pt-14 xl:pr-20 xl:pb-24 xl:mt-0 xl:mt-100 xl:flex">
      <Logo />
      <PageLinks />
      <ContactAndCopyRight />
    </footer>
  );
}

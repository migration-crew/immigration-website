import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import Contact from "@/public/Contact.jpeg";
import { useTranslations } from "next-intl";
import { ConsultantInfo } from "./_components/ConsultantInfo";
import { ContactForm } from "./_components/ContactForm";
import { GetInTouch } from "./_components/GetInTouch";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <>
      <HeaderPicture alt="contact us" src={Contact} title={t("title")} />
      <SectionContainer className="flex flex-col gap-6 xl:flex-row mt-[20px] xl:my-[58px]">
        <GetInTouch />
        <ContactForm />
      </SectionContainer>

      <SectionContainer>
        <ConsultantInfo />
      </SectionContainer>
    </>
  );
}

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import Contact from "@/public/Contact.jpeg";
import { ConsultantInfo } from "./_components/ConsultantInfo";
import { ContactForm } from "./_components/ContactForm";
import { GetInTouch } from "./_components/GetInTouch";

export default function ContactPage() {
  return (
    <>
      <HeaderPicture alt="contact us" src={Contact} title="Contact Us" />
      <SectionContainer className="flex flex-col space-y-0 xl:flex-row xl:space-y-0 xl:space-x-0 mt-[100px]">
        <GetInTouch />
        <ContactForm />
      </SectionContainer>

      <SectionContainer>
        <ConsultantInfo />
      </SectionContainer>
    </>
  );
}

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import Image from "next/image";
import { ConsultantInfo } from "./_components/ConsultantInfo";
import { ContactForm } from "./_components/ContactForm";
import { GetInTouch } from "./_components/GetInTouch";
import Larissa from "@/public/Larissa.png";

export default function ContactPage() {
  return (
    <>
      <HeaderPicture alt="contact us" src={Larissa} title="Contact Us" />
      <SectionContainer className="flex w-full">
        <GetInTouch />
        <ContactForm />
      </SectionContainer>

      <SectionContainer>
        <Image alt="contact us" src={Larissa} />
        <ConsultantInfo />
      </SectionContainer>
    </>
  );
}

// import FAQ from "@/components/common/faq";
// import { qaGeneralData } from "@/data/FAQData";

// const ContactPage = () => {
//   <div>
//     <div>
//       <input title="first name" data={first} />
//       <input title="last name" data={last} />
//     </div>
//     <input title="address" data={address} />
//   </div>;
//   return <FAQ data={qaGeneralData} />;
// };

// export default ContactPage;

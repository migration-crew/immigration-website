import { useTranslations } from "next-intl";

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import about from "@/public/about.jpeg";

export default function AboutPage() {
  const t = useTranslations("products");

  // return (
  //     <>
  //         <div>{t("cart")}</div>
  //     </>
  // )

  return (
    <>
      <HeaderPicture alt="about us" src={about} title={t("cart")} />
      <SectionContainer>
        <h1>Who we are?</h1>
        <p>
          Here at Up Immigration, we are dedicated to making your Canadian dream
          a reality. Our passion lies in helping individuals and families
          navigate the complexities of immigration with confidence.
        </p>
      </SectionContainer>
      <SectionContainer className="lg:flex py-[50px] lg:py-[40px]">
        <div className="w-1/2">picture section</div>
        <div className="w-1/2">
          <h3>Larissa Castelluber</h3>
          <p>
            Meet Larissa, a highly qualified and dedicated Regulated Canadian
            Immigration Consultant (RCIC). Larissa is a member of the
            Immigration Consultants of Canada Regulatory Council (ICCRC) and the
            Canadian Association of Professional Immigration Consultants
            (CAPIC).
          </p>
          <p>
            Larissa brings with her a solid educational background to her
            practice. She holds a certificate in Canadian Immigration Law,
            Policy, and Procedures from the University of British Columbia
            (UBC), making her well-versed in the legal and regulatory aspects of
            the Canadian immigration process.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}

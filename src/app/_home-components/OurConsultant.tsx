import { SectionContainer } from "@/components/common/SectionContainer";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import CICCLogo from "@/public/CICCLogo.png";
import Larissa from "@/public/Larissa.png";
import Image from "next/image";

export const OurConsultant = () => {
  return (
    <SectionContainer className="pt-[100px] pb-[50px] md:flex">
      <div className="max-w-[640px]">
        <h2 className="text-heading-mobile md:text-heading">Our consultant</h2>
        <SubHeading className="py-4 md:pb-0">Larissa Castelluber</SubHeading>
        <div className="relative max-w-[398px] h-[316px] md:hidden">
          <Image
            alt="Larissa"
            src={Larissa}
            layout={"fill"}
            objectFit={"cover"}
            className="rounded-3xl"
          />
        </div>
        <Paragraph className="py-4 pb-8 md:py-8">
          I&apos;m committed to helping you realize your Canadian dream. I
          understand the complexities of the immigration process and am here to
          offer the support and guidance you need. Together, we can ensure your
          journey to Canada is successful and fulfilling. Proudly regulated and
          in good standing with the College of Immigration and Citizenship
          Consultants, Larissa Castelluber, registration R710678
        </Paragraph>
        <div className="flex justify-between items-end">
          <div>
            <p>Registration: R710678</p>
            <p className="text-[#E92736]">Verify with ICCRC</p>
          </div>
          <div className="relative w-[185px] h-[45px] md:w-[309px] md:h-[75px]">
            <Image
              alt="CICCLogo"
              src={CICCLogo}
              layout={"fill"}
              objectFit={"cover"}
            />
          </div>
        </div>
      </div>
      <div className="relative w-[398px] h-[316px] ml-[42px] hidden md:block">
        <Image
          alt="Larissa"
          src={Larissa}
          layout={"fill"}
          objectFit={"cover"}
          className="rounded-3xl"
        />
      </div>
    </SectionContainer>
  );
};

import { SectionContainer } from "@/components/common/SectionContainer";
import { SubHeading } from "@/components/common/text/SubHeading";
import CICCLogo from "@/public/CICCLogo.png";
import Larissa from "@/public/Larissa.png";
import Image from "next/image";

export const OurConsultant = () => {
  return (
    <SectionContainer className="pt-[100px] pb-[50px] lg:flex">
      <div className="max-w-[640px]">
        <h2 className="text-heading-mobile lg:text-heading">Our consultant</h2>
        <SubHeading className="py-4 lg:pb-0">Larissa Castelluber</SubHeading>
        <div className="relative w-[398px] h-[316px] lg:hidden">
          <Image
            alt="Larissa"
            src={Larissa}
            layout={"fill"}
            objectFit={"cover"}
            className="rounded-3xl"
          />
        </div>
        <p className="text-paragraph-text-mobile lg:text-paragraph-text py-4 pb-8 lg:py-8">
          I&apos;m committed to helping you realize your Canadian dream. I
          understand the complexities of the immigration process and am here to
          offer the support and guidance you need. Together, we can ensure your
          journey to Canada is successful and fulfilling. Proudly regulated and
          in good standing with the College of Immigration and Citizenship
          Consultants, Larissa Castelluber, registration R710678
        </p>
        <div className="flex justify-between items-end">
          <div>
            <p>Registration: R710678</p>
            <p className="text-[#E92736]">Verify with ICCRC</p>
          </div>
          <div className="relative w-[185px] h-[45px] lg:w-[309px] lg:h-[75px]">
            <Image
              alt="CICCLogo"
              src={CICCLogo}
              layout={"fill"}
              objectFit={"cover"}
            />
          </div>
        </div>
      </div>
      <div className="relative w-[398px] h-[316px] ml-[42px] hidden lg:block">
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

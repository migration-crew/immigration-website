import { useTranslations } from "next-intl";

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Caption } from "@/components/common/text/Caption";
import { CtaButton } from "@/components/common/text/CtaButton";
import { Heading } from "@/components/common/text/Heading";
import { HeavyBody } from "@/components/common/text/HeavyBody";
import { HeavySubHeader } from "@/components/common/text/HeavySubHeader";
import { Hero } from "@/components/common/text/Hero";
import { Input } from "@/components/common/text/Input";
import { Menu } from "@/components/common/text/Menu";
import { OtherButton } from "@/components/common/text/OtherButton";
import { Paragraph } from "@/components/common/text/Paragraph";
import { SubHeading } from "@/components/common/text/SubHeading";
import { Title } from "@/components/common/text/Title";
import about from "@/public/about.jpeg";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import Larissa from "@/public/Larissa.png"

export default function AboutPage() {
  const t = useTranslations("products");

  // return (
  //     <>
  //         <div>{t("cart")}</div>
  //     </>
  // )

  return (
    <>
      <HeaderPicture alt="about us" src={about} title={"About us"} />
      <SectionContainer className="py-[100px]">
        <Heading className="pb-4">Who we are?</Heading>
        <Paragraph>
          Here at Up Immigration, we are dedicated to making your Canadian dream
          a reality. Our passion lies in helping individuals and families
          navigate the complexities of immigration with confidence.
        </Paragraph>
        <div className="xl:flex xl:gap-6 py-6 xl:pt-[100px] xl:pb-4">
          <ResponsiveImage alt="Larissa" src={Larissa} divClassName="h-[316px] mb-4 xl:m-0 xl:h-auto xl:w-1/2" imgClassName="rounded-3xl" />
          <div className="xl:w-1/2">
            <CtaButton>Larissa Castelluber</CtaButton>
            <Paragraph>
              Meet Larissa, a highly qualified and dedicated Regulated Canadian
              Immigration Consultant (RCIC). Larissa is a member of the
              Immigration Consultants of Canada Regulatory Council (ICCRC) and
              the Canadian Association of Professional Immigration Consultants
              (CAPIC).<br/>
              <br />
              Larissa brings with her a solid educational background to her
              practice. She holds a certificate in Canadian Immigration Law,
              Policy, and Procedures from the University of British Columbia
              (UBC), making her well-versed in the legal and regulatory aspects
              of the Canadian immigration process.
            </Paragraph>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <Hero>Hero</Hero>
        <Title>Title</Title>
        <Heading>Heading</Heading>
        <SubHeading>Sub Heading</SubHeading>
        <Paragraph>Paragraph</Paragraph>
        <Caption>Caption</Caption>
        <CtaButton>CtaButton</CtaButton>
        <OtherButton>OtherButton</OtherButton>
        <Menu>Menu</Menu>
        <Input>Input</Input>
        <HeavySubHeader>HeavySubHeader</HeavySubHeader>
        <HeavyBody>HeavyBody</HeavyBody>
      </SectionContainer>
    </>
  );
}

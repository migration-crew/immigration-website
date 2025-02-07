import { useTranslations } from "next-intl";

import { HeaderPicture } from "@/components/common/HeaderPicture";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
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

import { ApplicationStepMobile } from "@/components/common/ApplicationStepMobile";
import { TitleWithAccentLine } from "@/components/common/TitleWithAccentLine";
import Larissa from "@/public/Larissa.png";
import { EPSteps, Steps } from "../immigrate/content/steps";

export default function AboutPage() {
  const t = useTranslations("products");

  return (
    <>
      <HeaderPicture
        alt="about us"
        src={about}
        title={t("cart")}
        className="object-[0%,20%]"
      />
      <SectionContainer>
        <h1>Who we are?</h1>
        <p>
          Here at Up Immigration, we are dedicated to making your Canadian dream
          a reality. Our passion lies in helping individuals and families
          navigate the complexities of immigration with confidence.
        </p>
      </SectionContainer>
      <SectionContainer className="xl:flex py-[50px] xl:py-[40px]">
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
      <SectionContainer>
        <ResponsiveImage
          alt="Larissa"
          src={Larissa}
          divClassName="w-[398px] h-[316px]"
          imgClassName="rounded-3xl"
        >
          <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20 rounded-t-xl">
            <h1 className="text-page-titles-mobile xl:text-heading-mobile font-bold text-primary-white">
              Larissa
            </h1>
          </div>
        </ResponsiveImage>
      </SectionContainer>
      <ApplicationStepMobile
        title="Where to start?"
        steps={Steps()}
        height="h-[60px]"
      />
      <ApplicationStepMobile
        steps={EPSteps()}
        title="What is the process?"
        circleSpacing={120}
        height="h-[140px]"
      />
      <TitleWithAccentLine
        title="Federal Immigration Programs Managed by Express Entry"
        text={`Express Entry operates through an online system that manages${(
          <br />
        )} applications for three federal immigration programs:`}
      >
        <div className="pt-[26px]">
          <div className="pb-[26px]">
            <SubHeading>1. Federal Skilled Worker Program</SubHeading>
            <Paragraph className="pt-4">
              The Federal Skilled Worker Program is for skilled workers who have
              work experience and want to become permanent residents.
            </Paragraph>
          </div>
          <div className="pb-[26px]">
            <SubHeading>2. Federal Skilled Trades Program</SubHeading>
            <Paragraph className="pt-4">
              The Federal Skilled Trades Program targets skilled tradespeople
              with qualifications in specific trades. This program emphasizes
              practical skills and work experience in trades such as
              electricians, plumbers, and chefs, among others.
            </Paragraph>
          </div>
          <div className="pb-[26px]">
            <SubHeading>3. Canadian Experience Class</SubHeading>
            <Paragraph className="pt-4">
              The Canadian Experience Class is for individuals who have already
              gained skilled work experience in Canada. This program is ideal
              for temporary foreign workers or international graduates who have
              accumulated significant work experience in Canada and wish to
              transition to permanent residence.
            </Paragraph>
          </div>
        </div>
      </TitleWithAccentLine>
    </>
  );
}

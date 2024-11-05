import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/UpImmigrationButton";
import Ami from "@/public/Ami.png";
import Larissa from "@/public/Larissa.png";
import Shipman from "@/public/Shipman.png";
import Link from "next/link";
import { CtaButton } from "@/components/common/text/CtaButton";
import { Heading } from "@/components/common/text/Heading";
import { Paragraph } from "@/components/common/text/Paragraph";
import { Caption } from "@/components/common/text/Caption";
import { Menu } from "@/components/common/text/Menu";

export const WhoWeAre = () => {
  return (
    <SectionContainer className="py-10 lx:py-[100px]">
      <Heading className="pb-4">Who we are?</Heading>
      <Paragraph>
        Here at Up Immigration, we are dedicated to making your Canadian dream a
        reality. Our passion lies in helping individuals and families navigate
        the complexities of immigration with confidence.
      </Paragraph>
      <div className="xl:flex xl:gap-6 py-6 xl:pt-[100px] xl:pb-4">
        <ResponsiveImage
          alt="Larissa"
          src={Larissa}
          divClassName="h-[316px] mb-4 xl:m-0 xl:h-auto xl:w-1/2"
          imgClassName="rounded-3xl"
        />
        <div className="xl:w-1/2">
          <CtaButton>Larissa Castelluber</CtaButton>
          <Caption className="text-disabled-black">RCIC</Caption>
          <Paragraph className="mt-5">
            Meet Larissa, a highly qualified and dedicated Regulated Canadian
            Immigration Consultant (RCIC). Larissa is a member of the
            Immigration Consultants of Canada Regulatory Council (ICCRC) and the
            Canadian Association of Professional Immigration Consultants
            (CAPIC).
            <br />
            <br />
            Larissa brings with her a solid educational background to her
            practice. She holds a certificate in Canadian Immigration Law,
            Policy, and Procedures from the University of British Columbia
            (UBC), making her well-versed in the legal and regulatory aspects of
            the Canadian immigration process.
          </Paragraph>
        </div>
      </div>
      <div className="xl:flex xl:gap-6">
        <div className="flex xl:w-1/2 gap-4 xl:gap-6">
        <div className="w-1/2">
          <ResponsiveImage
            alt="Shipman"
            src={Shipman}
            divClassName="w-full h-[170px]"
            imgClassName="rounded-3xl"
          />
          <Menu>Name</Menu>
          <Caption>Position</Caption>
          </div>
          <div className="w-1/2">
          <ResponsiveImage
            alt="Ami"
            src={Ami}
            divClassName="w-full h-[170px]"
            imgClassName="rounded-3xl"
          />
          <Menu>Name</Menu>
          <Caption>Position</Caption>
          </div>
        </div>
        <div className="xl:w-1/2 mt-6 xl:m-0">
          <Button className="w-full xl:w-fit py-3 px-4">
            <Link href="/book-consultation">Book a free consultation</Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { Heading } from "@/components/common/text/Heading";
import { OtherButton } from "@/components/common/text/OtherButton";
import { SubHeading } from "@/components/common/text/SubHeading";
import consultant from "@/public/consultant.png";
import { useTranslations } from "next-intl";

export function ConsultantInfo() {
  const t = useTranslations("ContactPage");
  return (
    <div className="xl:flex my-14 xl:items-center">
      <div className="xl:w-2/5">
        <ResponsiveImage
          alt="consultant"
          src={consultant}
          divClassName="w-[350px] h-[340px] xl:w-[420px] xl:h-[600px]"
          imgClassName="rounded-2xl"
        />
      </div>
      <div className="space-y-7 xl:ml-7 xl:w-3/5 xl:flex xl:flex-col xl:space-y-10">
        <Heading className="mt-7">{t("heading")}</Heading>
        <div className="xl:flex xl:flex-col space-y-4">
          <SubHeading className="text-primary-red">
            {t("consultant")}
          </SubHeading>
          <OtherButton>
            {t("salutation")} <br />
            {t("consultantDescription")}
          </OtherButton>
        </div>
      </div>
    </div>
  );
}

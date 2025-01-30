import ContactMenu from "@/components/common/ContactMenu";
import { Caption } from "@/components/common/text/Caption";
import { contactData } from "@/data/ContactData";
import { useTranslations } from "next-intl";

export default function ContactAndCopyRight() {
  const t = useTranslations("NavigationMenu");

  return (
    <div className="flex flex-col justify-center items-center space-y-5  xl:items-end">
      <ContactMenu
        className="text-primary-white flex justify-center"
        components={contactData}
      />
      <Caption className="text-primary-white">
        {`©Up Immigration Consulting. ${t("allRightsReserved")}`}
      </Caption>
    </div>
  );
}

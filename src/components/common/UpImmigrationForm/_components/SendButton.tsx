import { Button } from "@/components/ui/UpImmigrationButton";
import { useTranslations } from "next-intl";

export function SendButton() {
  const t = useTranslations("Form");

  return (
    <Button type="submit" className="w-full mt-2">
      {t("send")}
    </Button>
  );
}

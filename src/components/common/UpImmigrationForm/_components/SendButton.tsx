import { Button } from "@/components/ui/UpImmigrationButton";
import { useTranslations } from "next-intl";

type Props = {
  status: string;
};

export function SendButton({ status }: Props) {
  const t = useTranslations("Form");

  return (
    <Button
      type="submit"
      className={`w-full mt-2 ${
        status === "sending"
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-opacity-80"
      }`}
    >
      {status === "sending" ? t("sending") : t("send")}
    </Button>
  );
}

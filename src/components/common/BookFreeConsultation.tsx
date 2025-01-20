import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/UpImmigrationButton";

type Props = {
  className?: string | undefined;
};

export function BookFreeConsultation({ className }: Props) {
  const t = useTranslations("Home");

  return (
    <Button asChild className={className}>
      <Link href="/book-consultation">{t("consultationButton")}</Link>
    </Button>
  );
}

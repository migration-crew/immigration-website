import { useTranslations } from "next-intl";

export default function ImmigratePage() {
  const t = useTranslations("products");

  return (
    <>
      <div>{t("cart")}</div>
    </>
  );
}
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("products");

    return (
        <>
            <div>{t("cart")}</div>
        </>
    )
}
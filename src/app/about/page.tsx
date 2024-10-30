import { useTranslations } from "next-intl";

import { HeaderPicture } from "@/components/common/HeaderPicture";
import about from "@/public/about.jpeg"

export default function AboutPage() {
    const t = useTranslations("products");

    // return (
    //     <>
    //         <div>{t("cart")}</div>
    //     </>
    // )

    return(
        <HeaderPicture alt="about us" src={about} title={t("cart")} />
    )
}
import { HeaderPicture } from "@/components/common/HeaderPicture";


import about from "@/public/about.jpeg";
import { WhoWeAre } from "./_components/WhoWeAre";


export default function AboutPage() {
  // const t = useTranslations("products");

  // return (
  //     <>
  //         <div>{t("cart")}</div>
  //     </>
  // )

  return (
    <>
      <HeaderPicture alt="about us" src={about} title={"About us"} />
      <WhoWeAre />
    </>
  );
}

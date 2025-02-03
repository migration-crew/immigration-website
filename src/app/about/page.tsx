import { HeaderPicture } from "@/components/common/HeaderPicture";

import { useTranslations } from 'next-intl';
import about from "@/public/about.jpeg";
import { WhoWeAre } from "./_components/WhoWeAre";
import { OurStrength } from "./_components/OurStrength";
import { OurStory } from "./_components/OurStory";
import { GetInTouch } from "./_components/GetInTouch";


export default function AboutPage() {
  const t = useTranslations('AboutUs');
  // const t = useTranslations("products");

  // return (
  //     <>
  //         <div>{t("cart")}</div>
  //     </>
  // )

  return (
    <>
      <HeaderPicture alt="about us" src={about} title={t('headerPictureTitle')} />
      <WhoWeAre />
      <OurStrength />
      <OurStory />
      <GetInTouch />
    </>
  );
}

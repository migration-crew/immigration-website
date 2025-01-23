import { HeaderPicture } from '@/components/common/HeaderPicture';
import about from '@/public/about.jpeg';
import { useTranslations } from 'next-intl';
import { GetInTouch } from './_components/GetInTouch';
import { OurStory } from './_components/OurStory';
import { OurStrength } from './_components/OurStrength';
import { WhoWeAre } from './_components/WhoWeAre';

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
            <HeaderPicture
                alt='about us'
                src={about}
                title={t('headerPictureTitle')}
            />
            <WhoWeAre />
            <OurStrength />
            <OurStory />
            <GetInTouch />
        </>
    );
}

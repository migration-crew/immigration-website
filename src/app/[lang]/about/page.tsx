import Link from 'next/link';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';

interface Params {
    lang: Locale;
}

const AboutPage = async ({ params }: { params: Params }) => {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <>
            <div>{dictionary.products.cart}</div>
            <Link href={`/${lang}/immigrate`}>Immigrate</Link>
        </>
    )
}

export default AboutPage
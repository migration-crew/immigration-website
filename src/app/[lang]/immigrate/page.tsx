import Link from 'next/link';
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

interface Params {
  lang: Locale;
}

export default async function ImmigratePage({ params }: { params: Params }) {
  const { lang } = params;
  const dictionary: any = await getDictionary(lang);

  return (
    <>
      <div>{dictionary.products.cart}</div>
      <Link href={`/${lang}/about`}>About</Link>
    </>
  );
}
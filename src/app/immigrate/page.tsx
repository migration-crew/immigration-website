import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ImmigratePage() {
  const t = useTranslations("products");

  return (
    <>
      <div>{t("cart")}</div>

      <section className="relative h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Immigrate</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Do you want to immigrate to Canada?
        </h2>
        <p className="text-gray-600 mb-6">
          Canada is a top destination for individuals and families seeking new
          opportunities. With over 80 immigration programs available, including
          options for skilled workers, Labour Market Impact Assessments (LMIA),
          Provincial Nominee Programs (PNP), and family reunification, there are
          numerous pathways to becoming a permanent resident.
        </p>
        <p className="text-gray-600 mb-6">
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </p>
        <Link
          href="#"
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 inline-block"
        >
          Book a consultation
        </Link>
      </section>
      <section>
        <div>
          <div>
            <h1>Do you want to immigrate to Canada?</h1>
            <div></div>
            <div></div>
            <button>Book</button>
          </div>
        </div>
      </section>
    </>
  );
}

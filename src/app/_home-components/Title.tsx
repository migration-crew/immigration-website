import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import home from "@/public/home.jpeg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Title = () => {
  const t = useTranslations("Home");

  return (
    <section className="relative h-[508px] xl:h-[624px]">
      <Image alt="home" src={home} layout={"fill"} objectFit={"cover"} />
      <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20">
        <div className="w-[355px] xl:w-[1080px] justify-start">
          <div className="w-[358px] xl:w-[650px]">
            <h1 className="text-[36px] md:text-[55px] font-bold text-primary-white">
              {t("title")}
            </h1>
            <p className="text-[14px] xl:text-[22px] text-primary-white">
              {t("subtitle")}
            </p>
            <div className="mt-[30px]">
              <BookFreeConsultation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

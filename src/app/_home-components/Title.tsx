import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { Hero } from "@/components/common/text/Hero";
import home from "@/public/home.jpeg";
import Image from "next/image";

export const Title = () => {
  return (
    <section className="relative h-[508px] xl:h-[624px]">
      <Image alt="home" src={home} layout={"fill"} objectFit={"cover"} />
      <div className="absolute w-full h-full grid place-content-center bg-secondary-blue-op-20">
        <div className="w-[355px] xl:w-[1080px] justify-start">
          <div className="w-[358px] xl:w-[650px]">
            <Hero className="text-primary-white">Start your Journey to Canada with us</Hero>
            <p className="text-[14px] xl:text-[22px] text-primary-white">
              We bring expertise, compassion, and care to support you in
              navigating the complexities of immigration with confidence.
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

import { Button } from "@/components/ui/button";
import home from "@/public/home.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="relative min-h-[508px] md:min-h-[624px]">
        <Image alt="home" src={home} layout={"fill"} objectFit={"cover"} />
        <div className="absolute w-full h-full grid place-content-center bg-gray-400 bg-opacity-50">
          <div className="max-w-[430px] md:max-w-[1440px] justify-start">
            <div className="max-w-[358px] md:max-w-[650px]">
              <h1 className="text-[36px] md:text-[55px] font-bold text-primary-white">
                Start your Journey to Canada with us
              </h1>
              <p className="text-[14px] md:text-[22px] text-primary-white">
                We bring expertise, compassion, and care to support you in
                navigating the complexities of immigration with confidence.
              </p>
              <Button className="mt-[30px]"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

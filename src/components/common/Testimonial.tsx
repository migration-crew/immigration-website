import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/UpImmigrationButton";
import { cn } from "@/lib/utils";
import googleReview from "@/public/googleReview.png";
import { TestimonialsType } from "@/types/TestimonialsType";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card } from "../ui/card";
import { ResponsiveImage } from "./ResponsiveImage";
import { Caption } from "./text/Caption";
import { Heading } from "./text/Heading";
import { HeavyBody } from "./text/HeavyBody";
import { HeavySubHeader } from "./text/HeavySubHeader";
import { Paragraph } from "./text/Paragraph";

type Props = {
  testimonials: TestimonialsType[];
  className?: string | undefined;
};

/**
 * Testimonial section
 * @param testimonials - pass testimonials data
 * @param className - pass custom classes to section container of Testimonial component
 * @example
 * ```tsx
 *  <Testimonial testimonials={testimonialData} className="pt-[50px] py-[100px]" />
 * ```
 */
export const Testimonial = ({ testimonials, className }: Props) => {
  const t = useTranslations("Home");

  return (
    <SectionContainer className={cn("hidden xl:block", className)}>
      <div className="flex flex-col gap-4">
        <Heading>{t("testimonialsTitle")}</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <ResponsiveImage
                alt={testimonial.name}
                src={testimonial.image}
                divClassName="w-full h-[236px] rounded-t-lg overflow-hidden"
              />

              <div className="flex flex-col p-4 gap-4">
                <div className="flex justify-between items-center">
                  <HeavySubHeader>{testimonial.name}</HeavySubHeader>
                  <ResponsiveImage
                    src={testimonial.countryImage}
                    alt={testimonial.country}
                    divClassName="w-[22px] h-[16px]"
                  />
                </div>
                <Caption>{testimonial.status}</Caption>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <HeavyBody className="text-justify">
                    &quot;{t("testimonialDescription")}&quot;
                  </HeavyBody>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center pt-4">
          <ResponsiveImage
            alt="Google Reviews"
            src={googleReview}
            divClassName="w-[150px] h-[85px]"
          />
          <Paragraph className="text-gray-600 py-4">
            {t("googleReviews")}
          </Paragraph>

          <Link href="https://www.google.com/search?q=Up+immigration&client=opera-gx&hs=dC0&sca_esv=db3f177c98a4bf7a&sxsrf=ADLYWIKchpWGpCthIu-52xqY_0D914VxfQ%3A1730482678099&ei=9hElZ9LcBbrTp84PlLH0oAQ&ved=0ahUKEwjSr8Wq1ruJAxW66ckDHZQYHUQQ4dUDCBA&uact=5&oq=Up+immigration&gs_lp=Egxnd3Mtd2l6LXNlcnAiDlVwIGltbWlncmF0aW9uMgQQIxgnMgwQIxiABBgTGCcYigUyDBAjGIAEGBMYJxiKBTIOEC4YgAQYxwEYywEYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IuAlQ6wVYiwdwAHgCkAEAmAHOAaABlgOqAQMyLTK4AQPIAQD4AQGYAgKgAtABwgIEEAAYR5gDAOIDBRIBMSBAiAYBkAYIkgcFMS4wLjGgB8gW&sclient=gws-wiz-serp#">
            <Button className="w-full xl:w-fit">{t("reviewsButton")}</Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

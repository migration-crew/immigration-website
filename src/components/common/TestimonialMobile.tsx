"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import googleReview from "@/public/googleReview.png";
import { TestimonialsType } from "@/types/TestimonialsType";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "../ui/UpImmigrationButton";
import { SectionContainer } from "./SectionContainer";
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
 * Testimonial section for mobile
 * @param testimonials - pass testimonials data
 * @param className - pass custom classes to section container of Testimonial component for mobile
 * @example
 * ```tsx
 *  <TestimonialMobile testimonials={testimonialData} className="pt-[50px] py-[100px]" />
 * ```
 */
export default function TestimonialMobile({ testimonials, className }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const t = useTranslations("Home");

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <SectionContainer className={cn("lg:hidden", className)}>
      <Heading>{t("testimonialsTitle")}</Heading>
      <div className="flex justify-between">
        <Image
          className="flex justify-center"
          src={googleReview}
          alt="Google Reviews"
          width={150}
          height={50}
        />
        <h1 className="text-5xl flex items-center text-secondary-blue font-bold">
          5.0
        </h1>
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-testimonials-card rounded-[20px] overflow-hidden">
                  <div className="flex gap-3">
                    <div className="relative w-[50%] rounded-l-lg">
                      <Image
                        src={testimonial.imageMobile}
                        alt={`${testimonial.name}'s testimonial`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-l-lg"
                      />
                    </div>
                    <div className="flex w-[50%] flex-col justify-center py-4 pr-4">
                      <div className="flex justify-between items-center">
                        <HeavySubHeader>{testimonial.name}</HeavySubHeader>
                        <Image
                          src={testimonial.countryImage}
                          alt={testimonial.country}
                          height={16}
                          width={22}
                        />
                      </div>
                      <Caption>{testimonial.status}</Caption>
                      <HeavyBody className="align-bottom text-justify mt-6 pt-4">
                        &quot;{t("testimonialDescription")}&quot;
                      </HeavyBody>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <Paragraph>{t("googleReviews")}</Paragraph>
        <Link href="https://www.google.com/search?q=Up+immigration&client=opera-gx&hs=dC0&sca_esv=db3f177c98a4bf7a&sxsrf=ADLYWIKchpWGpCthIu-52xqY_0D914VxfQ%3A1730482678099&ei=9hElZ9LcBbrTp84PlLH0oAQ&ved=0ahUKEwjSr8Wq1ruJAxW66ckDHZQYHUQQ4dUDCBA&uact=5&oq=Up+immigration&gs_lp=Egxnd3Mtd2l6LXNlcnAiDlVwIGltbWlncmF0aW9uMgQQIxgnMgwQIxiABBgTGCcYigUyDBAjGIAEGBMYJxiKBTIOEC4YgAQYxwEYywEYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IuAlQ6wVYiwdwAHgCkAEAmAHOAaABlgOqAQMyLTK4AQPIAQD4AQGYAgKgAtABwgIEEAAYR5gDAOIDBRIBMSBAiAYBkAYIkgcFMS4wLjGgB8gW&sclient=gws-wiz-serp#">
          <Button className="w-full xl:w-fit">{t("reviewsButton")}</Button>
        </Link>
      </div>
    </SectionContainer>
  );
}

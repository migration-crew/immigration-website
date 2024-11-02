"use client";

import { Testimonials } from "@/app/immigrate/content/testimonials";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import googleReview from "@/public/googleReview.png";
import Image from "next/image";
import * as React from "react";
import { SectionContainer } from "./SectionContainer";
import { Caption } from "./text/Caption";
import { Heading } from "./text/Heading";
import { HeavyBody } from "./text/HeavyBody";
import { HeavySubHeader } from "./text/HeavySubHeader";

export default function TestimonialMobile() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
    <SectionContainer className="lg:hidden">
      <Heading>Success stories</Heading>
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
      <div className="w-full max-w-4xl mx-auto px-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg rounded-3xl overflow-hidden">
                  <div className="flex gap-3">
                    <div className="relative w-[50%] h-[260px]">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s testimonial`}
                        fill
                        className="object-cover"
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
                        &quot;{testimonial.text}&quot;
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
      </div>
    </SectionContainer>
  );
}

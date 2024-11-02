"use-client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CloseIcon from "@/public/close-icon.svg";
import Image, { StaticImageData } from "next/image";
import { ForwardedRef, forwardRef } from "react";

interface Props {
  title: string;
  alt: string;
  description: string;
  image: StaticImageData;
  id: string;
}

export const NavCardItem = forwardRef<HTMLDivElement, Props>(
  function WorkNavCard(
    { id, title, alt, description, image }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    return (
      <Card
        id={id}
        className="flex flex-col p-6 rounded-[20px] gap-4 self-stretch shadow-[0px_-8px_10px_-1px_rgba(0,0,0,0.10)] mb-[-51px]"
        ref={ref}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <Image src={CloseIcon} alt="Close icon" />
          </div>
          <div>
            <CardContent className="text-xs p-0 overflow-hidden text-ellipsis">
              {description}
            </CardContent>
          </div>
        </div>
        <div
          className="w-full h-[197px] sm:h-[300px] lg:h-[400px] rounded-[10px]"
          style={{
            background: `linear-gradient(0deg, rgba(34, 116, 165, 0.30) 0%, rgba(34, 116, 165, 0.30) 100%), url(${image.src}) lightgray 50% / cover no-repeat`,
          }}
        >
          <Image
            src={image}
            alt={alt}
            quality={100}
            className="w-full h-full rounded-[10px] opacity-0"
          />
        </div>
      </Card>
    );
  }
);

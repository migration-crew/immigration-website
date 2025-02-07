import { StaticImageData } from "next/legacy/image";

export type TestimonialsType = {
  name: string;
  country: string;
  status: string;
  text: string;
  image: StaticImageData;
  imageMobile: StaticImageData;
  countryImage: StaticImageData;
};

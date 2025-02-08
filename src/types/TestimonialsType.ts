import { StaticImageData } from "next/image";

export type TestimonialsType = {
  name: string;
  country: string;
  status: string;
  text: string;
  image: StaticImageData;
  imageMobile: StaticImageData;
  countryImage: StaticImageData;
};

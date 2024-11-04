import { StaticImageData } from "next/image";

export type StudyCardType = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

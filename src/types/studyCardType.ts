import { StaticImageData } from "next/legacy/image";

export type StudyCardType = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

import larissa from "@/public/Larissa.png";
import { StaticImageData } from "next/image";

type TestimonialsType = {
  name: string
  country: string
  text: string
  image: StaticImageData
}

export const Testimonials: TestimonialsType[] = [
  {
    name: "Laura Ribeiro",
    country: "Brazil",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: larissa,
  },
  {
    name: "Maria Torres",
    country: "Mexico",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: larissa,
  },
  {
    name: "Juan Sanchez",
    country: "Colombia",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: larissa,
  },
];

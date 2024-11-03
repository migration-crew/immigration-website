import brazil from "@/public/brazil.png";
import colombia from "@/public/colombia.png";
import juan from "@/public/juan.jpg";
import laura from "@/public/laura.jpg";
import maria from "@/public/maria.jpg";
import mexico from "@/public/mexico.png";
import { TestimonialsType } from "@/types/TestimonialsType";

export const testimonialData: TestimonialsType[] = [
  {
    name: "Laura Ribeiro",
    country: "Brazil",
    status: "Express Entry",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: laura,
    countryImage: brazil,
  },
  {
    name: "Maria Torres",
    country: "Mexico",
    status: "Express Entry",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: maria,
    countryImage: mexico,
  },
  {
    name: "Juan Sanchez",
    country: "Colombia",
    status: "Permanent Resident",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: juan,
    countryImage: colombia,
  },
];

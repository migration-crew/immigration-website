import { StaticImageData } from "next/image";

export type TestimonialsType = {
    name: string;
    country: string;
    status: string;
    text: string;
    image: StaticImageData;
    countryImage: StaticImageData;
};
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/UpImmigrationButton";
import googleReview from "@/public/googleReview.png";
import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "../../app/immigrate/content/testimonials";
import { Caption } from "./text/Caption";
import { HeavyBody } from "./text/HeavyBody";
import { HeavySubHeader } from "./text/HeavySubHeader";

export const Testimonial = () => {
  return (
    <SectionContainer>
      <div>
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={343}
                  height={236}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <HeavySubHeader>{testimonial.name}</HeavySubHeader>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.countryImage}
                      alt={testimonial.country}
                      width={22}
                      height={16}
                    />
                  </div>
                </div>
                <Caption>{testimonial.status}</Caption>
              </div>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <HeavyBody>{testimonial.text}</HeavyBody>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center pt-4">
          <Image
            className="fex justify-center"
            src={googleReview}
            alt="Google Reviews"
            width={150}
            height={50}
          />
          <p className="text-gray-600 py-4">
            Explore our Google Reviews for top-rated immigration services.
          </p>
          <Button>
            <Link href="https://www.google.com/search?q=Up+immigration&client=opera-gx&hs=dC0&sca_esv=db3f177c98a4bf7a&sxsrf=ADLYWIKchpWGpCthIu-52xqY_0D914VxfQ%3A1730482678099&ei=9hElZ9LcBbrTp84PlLH0oAQ&ved=0ahUKEwjSr8Wq1ruJAxW66ckDHZQYHUQQ4dUDCBA&uact=5&oq=Up+immigration&gs_lp=Egxnd3Mtd2l6LXNlcnAiDlVwIGltbWlncmF0aW9uMgQQIxgnMgwQIxiABBgTGCcYigUyDBAjGIAEGBMYJxiKBTIOEC4YgAQYxwEYywEYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IuAlQ6wVYiwdwAHgCkAEAmAHOAaABlgOqAQMyLTK4AQPIAQD4AQGYAgKgAtABwgIEEAAYR5gDAOIDBRIBMSBAiAYBkAYIkgcFMS4wLjGgB8gW&sclient=gws-wiz-serp#">
              Read more
            </Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

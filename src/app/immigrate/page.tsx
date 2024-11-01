"use client";

import { SectionContainer } from "@/components/common/SectionContainer";
import googleReview from "@/public/googleReview.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FAQs } from "./content/faqs";
import { ImmigrationPrograms } from "./content/immigrationPrograms";
import { Steps } from "./content/steps";
import { Testimonials } from "./content/testimonials";

export default function ImmigratePage() {
  const t = useTranslations("products");

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleProgram = (title: string) => {
    setExpandedProgram(expandedProgram === title ? null : title);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <div>{t("cart")}</div>

      <section className="relative h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Immigrate</h1>
        </div>
      </section>

      <SectionContainer className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Do you want to immigrate to Canada?
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          Canada is a top destination for individuals and families seeking new
          opportunities. With over 80 immigration programs available, including
          options for skilled workers, Labour Market Impact Assessments (LMIA),
          Provincial Nominee Programs (PNP), and family reunification, there are
          numerous pathways to becoming a permanent resident.
        </p>
        <p className="text-gray-600 mb-6 text-justify">
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </p>
        <Link
          href="#"
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 inline-block"
        >
          Book a consultation
        </Link>
      </SectionContainer>

      <SectionContainer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Discover all your options</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {ImmigrationPrograms.map((program) => (
              <a
                href={`#${program.title}`}
                key={program.title}
                className="bg-white text-gray-600 py-2 px-4 rounded hover:bg-gray-200 text-center"
              >
                {program.title}
              </a>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ImmigrationPrograms.map((program) => (
              <div
                id={program.title}
                key={program.title}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-start ">
                    <button
                      className="text-xl font-semibold mb-2"
                      onClick={() => toggleProgram(program.title)}
                    >
                      <h3>{program.title}</h3>
                      <div className="mt-4 text-red-600">
                        {expandedProgram === program.title ? (
                          <ChevronUp className="ml-2" />
                        ) : (
                          <ChevronDown className="ml-2" />
                        )}
                      </div>
                    </button>
                  </div>
                  {expandedProgram === program.title ? (
                    <div className="mt-4 text-gray-600 text-justify">
                      {program.details}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-justify">
                      {program.description}
                    </p>
                  )}
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="w-full"
                  />

                  <button className="mt-4 text-red-600 flex items-center">
                    {expandedProgram === program.title ? (
                      <Link
                        href={`/immigrate/${program.endpoint}`}
                        className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 inline-block"
                      >
                        Read more
                      </Link>
                    ) : (
                      <p className="hidden"></p>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Where to start?</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 inline-block"
          >
            Book a free initial consultation
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
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
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
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
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Image
              src={googleReview}
              alt="Google Reviews"
              width={150}
              height={50}
            />
            <p className="mt-2 text-gray-600">
              Explore our Google Reviews for top-rated immigration services.
            </p>
            <Link
              href="https://www.google.com/search?q=Up+immigration&client=opera-gx&hs=dC0&sca_esv=db3f177c98a4bf7a&sxsrf=ADLYWIKchpWGpCthIu-52xqY_0D914VxfQ%3A1730482678099&ei=9hElZ9LcBbrTp84PlLH0oAQ&ved=0ahUKEwjSr8Wq1ruJAxW66ckDHZQYHUQQ4dUDCBA&uact=5&oq=Up+immigration&gs_lp=Egxnd3Mtd2l6LXNlcnAiDlVwIGltbWlncmF0aW9uMgQQIxgnMgwQIxiABBgTGCcYigUyDBAjGIAEGBMYJxiKBTIOEC4YgAQYxwEYywEYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IuAlQ6wVYiwdwAHgCkAEAmAHOAaABlgOqAQMyLTK4AQPIAQD4AQGYAgKgAtABwgIEEAAYR5gDAOIDBRIBMSBAiAYBkAYIkgcFMS4wLjGgB8gW&sclient=gws-wiz-serp#"
              className="text-red-600 hover:underline mt-2 inline-block"
            >
              Read more
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Immigration Frequent Questions
        </h2>
        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {expandedFAQ === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>
              {expandedFAQ === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}

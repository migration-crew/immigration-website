"use client";

import { useImmigration } from "@/store/immigration";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Steps = [
  {
    title: "Book a 20 min Free Consultation",
    description: "Tell us about your goals in Canada and your profile.",
  },
  {
    title: "Analyze your options",
    description:
      "We'll provide possible pathways for you and send you a quote.",
  },
  {
    title: "Make your payment",
    description: "You can pay via e-transfer through installment payments",
  },
  {
    title: "Gather the Documents",
    description: "We'll list the documents required for your application.",
  },
  {
    title: "Apply",
    description: "One of our experts will submit your application.",
  },
];

const Testimonials = [
  {
    name: "Laura Ribeiro",
    country: "Brazil",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Maria Torres",
    country: "Mexico",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Juan Sanchez",
    country: "Colombia",
    text: "I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function ImmigratePage() {
  const t = useTranslations("products");
  const {
    immigrationPrograms,
    faqs,
    expandedProgram,
    expandedFAQ,
    toggleProgram,
    toggleFAQ,
  } = useImmigration();

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

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Do you want to immigrate to Canada?
        </h2>
        <p className="text-gray-600 mb-6">
          Canada is a top destination for individuals and families seeking new
          opportunities. With over 80 immigration programs available, including
          options for skilled workers, Labour Market Impact Assessments (LMIA),
          Provincial Nominee Programs (PNP), and family reunification, there are
          numerous pathways to becoming a permanent resident.
        </p>
        <p className="text-gray-600 mb-6">
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
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Discover all your options</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              "Express Entry",
              "Provincial Nominee",
              "Family Sponsor",
              "Caregiver",
              "Start-Up Visa",
              "Self-Employed",
              "Humanitarian & Compassionate",
              "Atlantic Immigration",
              "Northern Immigration",
            ].map((option) => (
              <button
                key={option}
                className="bg-white text-gray-600 py-2 px-4 rounded hover:bg-gray-200"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {immigrationPrograms.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                  <button
                    className="mt-4 text-red-600 flex items-center"
                    onClick={() => toggleProgram(program.title)}
                  >
                    {expandedProgram === program.title
                      ? "Show less"
                      : "Learn more"}
                    {expandedProgram === program.title ? (
                      <ChevronUp className="ml-2" />
                    ) : (
                      <ChevronDown className="ml-2" />
                    )}
                  </button>
                  {expandedProgram === program.title && (
                    <div className="mt-4 text-gray-600">{program.details}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
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
      </section>
      <section className="bg-gray-100 py-12">
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
              src="/placeholder.svg?height=50&width=150"
              alt="Google Reviews"
              width={150}
              height={50}
            />
            <p className="mt-2 text-gray-600">
              Explore our Google Reviews for top-rated immigration services.
            </p>
            <Link
              href="#"
              className="text-red-600 hover:underline mt-2 inline-block"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Immigration Frequent Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
      </section>
    </>
  );
}

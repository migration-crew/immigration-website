import { SectionContainer } from "@/components/common/SectionContainer";
import { Link } from "lucide-react";
import Image from "next/image";
import { EPSteps } from "../content/steps";

export default function ExpressEntry() {
  return (
    <>
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

      <SectionContainer>
        <h1 className="text-3xl font-bold mb-6 pt-2">
          Overview of Express Entry System
        </h1>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          How does Express Entry work?
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          The Express Entry system is the fastest way for skilled workers to
          move to Canada. It uses a points system called the Comprehensive
          Ranking System (CRS) to score candidates based on their age,
          education, work experience, and language skills. The higher your
          score, the better your chances of being invited to apply for permanent
          residence. The system also prioritizes those with job offers or
          provincial nominations, making it easier for them to get selected.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          What is the Express Entry System?
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          The Express Entry system is a streamlined immigration process designed
          to manage applications for permanent residence in Canada. It
          facilitates the selection of skilled workers most likely to succeed in
          the Canadian economy. As a Regulated Canadian Immigration Consultant
          (RCIC), Up Immigration provides expert guidance on navigating this
          system.
        </p>
      </SectionContainer>

      <SectionContainer>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Express Entry"
          width={1200}
          height={400}
        />
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          How does Express Entry work?
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          The Express Entry system is the fastest way for skilled workers to
          move to Canada. It uses a points system called the Comprehensive
          Ranking System (CRS) to score candidates based on their age,
          education, work experience, and language skills. The higher your
          score, the better your chances of being invited to apply for permanent
          residence. The system also prioritizes those with job offers or
          provincial nominations, making it easier for them to get selected.
        </p>
      </SectionContainer>

      <SectionContainer className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">What is the process?</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {EPSteps.map((step, index) => (
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

      <SectionContainer>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Express Entry"
          width={1200}
          height={400}
        />
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          Federal Immigration Programs Managed by Express Entry
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          Express Entry operates through an online system that manages
          applications for three federal immigration programs:
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          1. Federal Skilled Worker Program
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          The Federal Skilled Worker Program is for skilled workers who have
          work experience and want to become permanent residents.
        </p>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          2. Federal Skilled Trades Program
        </h2>
        <p className="text-gray-600 mb-6 text-justify">
          The Federal Skilled Trades Program targets skilled tradespeople with
          qualifications in specific trades. This program emphasizes practical
          skills and work experience in trades such as electricians, plumbers,
          and chefs, among others.
        </p>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6 text-justify">
          3. Canadian Experience Class
        </h2>
        <p className="text-gray-600 mb-6">
          The Canadian Experience Class is for individuals who have already
          gained skilled work experience in Canada. This program is ideal for
          temporary foreign workers or international graduates who have
          accumulated significant work experience in Canada and wish to
          transition to permanent residence.
        </p>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6 text-justify">
          Who is Eligible for Express Entry?
        </h2>
        <p className="text-gray-600 mb-6">
          Eligibility for Express Entry depends on several factors including
          age, education, work experience, and language proficiency. Detailed
          criteria are available on our Express Entry Work Experience
          Requirements page.
        </p>
      </SectionContainer>

      <SectionContainer>
        <div className="text-center mt-12">
          <Link
            href="#"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 inline-block"
          >
            Book a free initial consultation
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}

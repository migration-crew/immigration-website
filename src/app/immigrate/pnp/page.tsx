import { SectionContainer } from "@/components/common/SectionContainer";
import Image from "next/image";
import { PNPFAQs } from "../content/faqs";
import { PNPPrograms } from "../content/pnpPrograms";

export default function ProvincialNominiee() {
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
          <h1 className="text-white text-6xl font-bold">
            Provincial Nominee Programs
          </h1>
        </div>
      </section>

      <SectionContainer>
        <h1 className="text-3xl font-bold mb-6 pt-10 pb-8">
          Overview of Provincial Nominee Programs
        </h1>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">
          What are Provincial Nominee Programs?
        </h2>
        <p className="text-gray-600 mb-6 pb-10 text-justify">
          The Provincial Nominee Programs (PNPs) allow Canadian provinces and
          territories to nominate individuals who wish to immigrate to Canada
          and settle in a specific province. These programs are designed to
          address the unique labor market needs of each province and territory.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">Benefits of PNPs</h2>
        <p className="text-gray-600 mb-6 pb-10 text-justify">
          The Express Entry system is a streamlined immigration process PNPs
          provide a faster pathway to permanent residency, address specific
          provincial labor market needs, and offer a variety of categories to
          attract skilled workers, entrepreneurs, and international graduates.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6">Provinces and Territories</h2>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Provinces and Territories"
          width={1200}
          height={400}
        />
      </SectionContainer>

      <SectionContainer>
        <h1 className="text-3xl font-bold mb-8 pt-10">
          Provincial Nominee Programs by Province
        </h1>
        {PNPPrograms.map((program) => (
          <div key={program.title}>
            <h2 className="text-3xl font-bold mb-6">{program.title}</h2>
            <p className="text-gray-600 mb-6 text-justify">
              {program.description}
            </p>
          </div>
        ))}
      </SectionContainer>

      <SectionContainer>
        <h1 className="text-3xl font-bold mb-6 pt-2">
          Express Entry Provincial Nominee Programs
        </h1>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Express Entry PNP"
          width={1200}
          height={400}
        />

        {PNPFAQs.map((pnpfaq) => (
          <div key={pnpfaq.question}>
            <h2 className="text-3xl font-bold mb-6">{pnpfaq.question}</h2>
            <p className="text-gray-600 mb-6 text-justify">{pnpfaq.answer}</p>
          </div>
        ))}
      </SectionContainer>
    </>
  );
}

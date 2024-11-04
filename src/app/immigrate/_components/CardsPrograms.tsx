"use client";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/UpImmigrationButton";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImmigrationPrograms } from "../content/immigrationPrograms";

export const CardsPrograms = () => {
  const toggleProgram = (title: string) => {
    setExpandedProgram(expandedProgram === title ? null : title);
  };

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <SectionContainer>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Discover all your options</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {ImmigrationPrograms.map((program) => (
            <a
              href={`#${program.title}`}
              key={program.title}
              className="bg-[#DFDFDF] text-[#000000] py-2 px-4 rounded hover:bg-gray-200 text-center"
            >
              {program.title}
            </a>
          ))}
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {ImmigrationPrograms.map((program) => (
            <div
              id={program.title}
              key={program.title}
              className="bg-white rounded-lg overflow-hidden shadow-[0px_-8px_10px_-1px_rgba(0,0,0,0.10)]"
            >
              <div className="p-6">
                <div className="flex justify-between">
                  <button
                    className="max-w-full text-xl flex justify-between font-semibold mb-2"
                    onClick={() => toggleProgram(program.title)}
                  >
                    <h3>{program.title}</h3>
                    <div className="text-red-600">
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
                {expandedProgram === program.title ? (
                  <Button>
                    <Link href={`/immigrate/${program.endpoint}`}>
                      Read more
                    </Link>
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

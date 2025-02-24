"use client";
import { SectionContainer } from "@/components/common/SectionContainer";
import { FAQs } from "@/data/FAQData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const FAQComponent = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <SectionContainer className="px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">
        Immigration Frequent Questions
      </h2>
      <div className="space-y-4">
        {FAQs().map((faq, index) => (
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
  );
};

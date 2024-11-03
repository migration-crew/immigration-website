import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/UpImmigrationButton";
import Link from "next/link";
import { Steps } from "../content/steps";

export const StepsComponent = () => {
  return (
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
      <div className="pt-7 flex justify-center">
        <Button>
          <Link href="/book-consultation">
            Book a free initial consultation
          </Link>
        </Button>
      </div>
    </SectionContainer>
  );
};

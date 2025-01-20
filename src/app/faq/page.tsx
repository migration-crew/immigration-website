import FAQ from "@/components/common/faq";
import { qaGeneralData } from "@/data/FAQData";

const FAQPage = () => {
  return (
    <FAQ
      data={qaGeneralData}
      title="FAQ"
      className="py-8"
    />
  );
};

export default FAQPage;

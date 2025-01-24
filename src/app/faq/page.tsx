import FAQ from "@/components/common/faq";
import { QAGeneralData } from "@/data/FAQData";

const FAQPage = () => {
  return <FAQ data={QAGeneralData()} title="FAQ" className="py-8" />;
};

export default FAQPage;

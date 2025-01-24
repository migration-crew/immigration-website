import { HeaderPicture } from "@/components/common/HeaderPicture";
import { BookFreeConsultationForm } from "./_components/BookFreeConsultationForm";
import BookConsultationImage from "@/public/book-consultation.jpeg";
import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/common/SectionContainer";

export default function BookConsultationPage() {
  const t = useTranslations("Form");

  return (
    <>
      <HeaderPicture alt="book consultation" src={BookConsultationImage} title={`${t("bookAConsultation")}`}/>
      <SectionContainer className="my-[60px]">
        <BookFreeConsultationForm />
      </SectionContainer>
    </>
  );
}

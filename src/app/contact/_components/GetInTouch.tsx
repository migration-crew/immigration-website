import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { Heading } from "@/components/common/text/Heading";
import { OtherButton } from "@/components/common/text/OtherButton";
import { AiOutlineWhatsApp as Whatsapp } from "react-icons/ai";
import { AiFillMail as Mail } from "react-icons/ai";
import { Card } from "@/components/ui/card"

export function GetInTouch() {
  return (
    <Card className="min-h-[280px] xl:min-h-[280px] xl:w-full xl:w-2/5 p-6 flex flex-col h-full justify-between">
      <div>
        <Heading className="mb-7">Get in touch</Heading>
        <div className="space-y-3">
          <div className="flex space-x-3 items-center">
            <Whatsapp size={25} />
            <OtherButton>+1 672-588-1360</OtherButton>
          </div>
          <div className="flex space-x-3 items-center">
            <Mail size={25} />
            <OtherButton>info@upimmigration.ca</OtherButton>
          </div>
        </div>
      </div>
      <BookFreeConsultation className="mt-auto w-full" />
    </Card>
  );
}

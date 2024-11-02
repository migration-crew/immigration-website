import { BookFreeConsultation } from "@/components/common/BookFreeConsultation";
import { Heading } from "@/components/common/text/Heading";
import { OtherButton } from "@/components/common/text/OtherButton";
import { AiOutlineWhatsApp as Whatsapp } from "react-icons/ai";
import { AiFillMail as Mail } from "react-icons/ai";
import { Card } from "@/components/ui/card"

export function GetInTouch() {
  return (
    <Card className="w-[446px] p-6">
      <Heading className="mb-7">Get in touch</Heading>
        <div className="space-y-3">
          <div className="flex space-x-3 items-center">
            <Whatsapp size={25}/>
            <OtherButton>+1 672-588-1360</OtherButton>
          </div>
          <div className="flex space-x-3 items-center">
            <Mail size={25}/>
            <OtherButton>info@upimmigration.ca</OtherButton>
          </div>
        </div>
      {/* Wanna add fixed bottom-10 to this component after merging my PR */}
      <BookFreeConsultation/>
    </Card>
  );
}

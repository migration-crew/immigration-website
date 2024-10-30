import { Button } from "@/components/ui/UpImmigrationButton";
import { InputField } from "./InputField";
import { InputTextArea } from "./InputTextArea";

export function BookFreeConsultationForm() {
  return (
    <div className="py-10 px-4 flex flex-col gap-4 bg-neutral-secondary-white">
      <h2 className="text-xl font-bold ">Book a free initial consultation!</h2>
      <form action="" className="flex flex-col gap-4">
        <InputField type="text" id="name" name="name" label="First name" />
        <InputField
          type="text"
          id="last-name"
          name="last-name"
          label="Last name"
        />
        <InputField type="email" id="email" name="email" label="Email" />
        <InputTextArea />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

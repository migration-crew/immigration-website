"use client";
import { UpImmigrationForm } from "@/components/common/UpImmigrationForm/UpImmigrationForm";
import { Card } from "@/components/ui/card";

export function ContactForm() {
  const handleOnSubmit = () => {
    // When we wanna do something when the form is submitted, we can do it here
    console.log("Form submitted");
  };

  return (
    <Card className="w-full xl:w-3/5">
      <UpImmigrationForm
        title="Send us a message"
        className="min-h-[550px] xl:min-h-[500px]"
        onSubmitCallback={handleOnSubmit}
      />
    </Card>
  );
}

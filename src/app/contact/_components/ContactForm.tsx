"use client";
import { UpImmigrationForm } from "@/components/common/UpImmigrationForm/UpImmigrationForm";

export function ContactForm() {
  const handleOnSubmit = () => {
    // When we wanna do something when the form is submitted, we can do it here
    console.log("Form submitted");
  }

  return (
      <UpImmigrationForm title="Send us a message" onSubmitCallback={handleOnSubmit}/>
  );
}

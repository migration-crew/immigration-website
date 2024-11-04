"use client";
import { UpImmigrationForm } from "@/components/common/UpImmigrationForm/UpImmigrationForm";

export function BookFreeConsultationForm() {
  const handleOnSubmit = () => {
    // When we wanna do something when the form is submitted, we can do it here
    console.log("Form submitted");
  }

  return (
    <UpImmigrationForm title="Book a free initial consultation!" onSubmitCallback={handleOnSubmit}/>
  );
}

"use client";
import { UpImmigrationForm } from "@/components/common/UpImmigrationForm/UpImmigrationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const handleOnSubmit = () => {
    // When we wanna do something when the form is submitted, we can do it here
    console.log("Form submitted");
  }

  return (
    <Card>
      <UpImmigrationForm title="Send us a message" 
      className="min-w-[550px]" onSubmitCallback={handleOnSubmit}/>
    </Card>
  );
}

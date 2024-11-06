"use client";
import { UpImmigrationForm } from "@/components/common/UpImmigrationForm/UpImmigrationForm";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function BookFreeConsultationForm() {
  const t = useTranslations("Form");

  const handleOnSubmit = () => {
    // When we wanna do something when the form is submitted, we can do it here
    console.log("Form submitted");
  };

  return (
    <Card>
      <UpImmigrationForm title={t("title")} onSubmitCallback={handleOnSubmit} />
    </Card>
  );
}

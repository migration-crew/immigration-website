"use client";
import { UpImmigrationForm } from "@/components/common/UpImmigrationForm/UpImmigrationForm";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("ContactPage");
  const handleOnSubmit = () => {
    // When we wanna do something when the form is submitted, we can do it here
    console.log(t("onSubmit"));
  };

  return (
    <Card className="xl:w-full xl:w-3/5">
      <UpImmigrationForm
        title={t("subheading1")}
        className="min-h-[550px] xl:min-h-[500px]"
        onSubmitCallback={handleOnSubmit}
      />
    </Card>
  );
}

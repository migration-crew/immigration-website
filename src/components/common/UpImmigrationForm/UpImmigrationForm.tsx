"use client";

import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Heading } from "../../common/text/Heading";
import { EmailField } from "./_components/EmailField";
import { FirstNameField } from "./_components/FirstNameField";
import { LastNameField } from "./_components/LastNameField";
import { MessageField } from "./_components/MessageField";
import { SendButton } from "./_components/SendButton";

const formSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.string().trim(),
  message: z.string().trim(),
});

type Props = {
  className?: string;
  title: string;
  onSubmitCallback: () => void;
};

export type FormValues = z.infer<typeof formSchema>;

export function UpImmigrationForm({
  className,
  title,
  onSubmitCallback,
}: Props) {
  const { toast } = useToast();
  const t = useTranslations("Form");

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // 1. Here I define a form using react-hook-form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // 2. Here I define a submit handler.
  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      onSubmitCallback();
      toast({
        description: t("submitMessage"),
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus("error");
      toast({
        variant: "destructive",
        description: t("errorMessage"),
      });
    }
  }

  return (
    <div
      className={`py-6 px-4 flex flex-col gap-8 bg-neutral-secondary-white h-full ${className}`}
    >
      <Heading>{title}</Heading>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FirstNameField control={form.control} />
          <LastNameField control={form.control} />
          <EmailField control={form.control} />
          <MessageField control={form.control} />
          <SendButton status={status} />
        </form>
      </Form>
    </div>
  );
}

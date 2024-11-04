"use client";

import { Form } from "@/components/ui/BookConsultationForm";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EmailField } from "./_components/EmailField";
import { FirstNameField } from "./_components/FirstNameField";
import { LastNameField } from "./_components/LastNameField";
import { MessageField } from "./_components/MessageField";
import { SendButton } from "./_components/SendButton";
import { Heading } from "../../common/text/Heading";

const formSchema = z.object({
  firstname: z.string().trim(),
  lastname: z.string().trim(),
  email: z.string().trim(),
  message: z.string().trim(),
});

type Props = {
  className?: string
  title: string
  onSubmitCallback: () => void
}

export type FormValues = z.infer<typeof formSchema>;

export function UpImmigrationForm({ className, title, onSubmitCallback }: Props) {
  const { toast } = useToast();

  // 1. Here I define a form using react-hook-form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  // 2. Here I define a submit handler.
  function onSubmit(values: FormValues) {
    onSubmitCallback();
    console.log(values);
    toast({
      description: "Thanks for your message! We will get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className={`py-10 px-4 flex flex-col gap-4 bg-neutral-secondary-white h-full ${className}`}>
      <Heading>{title}</Heading>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FirstNameField control={form.control} />
          <LastNameField control={form.control} />
          <EmailField control={form.control} />
          <MessageField control={form.control} />
          <SendButton />
        </form>
      </Form>
    </div>
  );
}

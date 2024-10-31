import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues } from "./BookFreeConsultationForm";

interface Props {
  control: Control<FormValues>;
}

export function MessageField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              className={`rounded-[8px] py-3 px-4 bg-white`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

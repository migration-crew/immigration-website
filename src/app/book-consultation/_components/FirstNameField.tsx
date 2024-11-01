import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/BookConsultationForm";
import { Input } from "@/components/ui/BookConsultationInput";
import { Control } from "react-hook-form";
import { FormValues } from "./BookFreeConsultationForm";

interface Props {
  control: Control<FormValues>;
}

export function FirstNameField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="firstname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <Input {...field} className={`rounded-[8px] py-3 px-4 bg-white`} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

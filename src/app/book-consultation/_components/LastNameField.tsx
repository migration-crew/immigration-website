import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/BookConsultationForm";
import { Input } from "@/components/ui/BookConsultationInput";
import { Control } from "react-hook-form";
import { FormValues } from "./BookFreeConsultationForm";

interface Props {
  control: Control<FormValues>;
}

export function LastNameField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="lastname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              className={`rounded-[8px] py-3 px-4 bg-white`}
              required
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/BookConsultationForm";
import { Input } from "@/components/ui/BookConsultationInput";
import { Control } from "react-hook-form";
import { FormValues } from "../UpImmigrationForm";

interface Props {
  control: Control<FormValues>;
}

export function EmailField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
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

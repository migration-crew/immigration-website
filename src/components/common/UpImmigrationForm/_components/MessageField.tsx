import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { FormValues } from "../UpImmigrationForm";

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
        </FormItem>
      )}
    />
  );
}

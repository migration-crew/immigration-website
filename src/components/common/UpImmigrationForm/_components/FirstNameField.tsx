import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormValues } from "../UpImmigrationForm";

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

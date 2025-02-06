import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Control } from "react-hook-form";
import { FormValues } from "../UpImmigrationForm";

interface Props {
  control: Control<FormValues>;
}

export function LastNameField({ control }: Props) {
  const t = useTranslations("Form");

  return (
    <FormField
      control={control}
      name="lastName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("lastName")}</FormLabel>
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

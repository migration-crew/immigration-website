import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormValues } from "../UpImmigrationForm";
import { useTranslations } from "next-intl";

interface Props {
  control: Control<FormValues>;
}

export function EmailField({ control }: Props) {
  const t = useTranslations("Form");

  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("email")}</FormLabel>
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

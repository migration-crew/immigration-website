import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { FormValues } from "../UpImmigrationForm";
import { useTranslations } from "next-intl";

interface Props {
  control: Control<FormValues>;
}

export function MessageField({ control }: Props) {
  const t = useTranslations("Form");

  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("message")}</FormLabel>
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

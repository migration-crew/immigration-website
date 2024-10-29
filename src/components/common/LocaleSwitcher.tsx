"use client";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function LanguageSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const handleLanguageChange = (value: string) => {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    };

    return (
        <Select value={locale} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">{t('en')}</SelectItem>
                <SelectItem value="es">{t('es')}</SelectItem>
                <SelectItem value="pt">{t('pt')}</SelectItem>
            </SelectContent>
        </Select>
    );
};

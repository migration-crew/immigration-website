"use client";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/LanguageSelect";
import Image from 'next/image';
import unitedStates from "@/public/unitedStates.png"
import spain from "@/public/spain.png"
import brazil from "@/public/brazil.png"

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
        <>
            <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-[90px] p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition-colors"
            >
                <option value="en" className="flex items-center">
                    EN
                </option>
                <option value="es" className="flex items-center">
                    ES
                </option>
                <option value="pt" className="flex items-center">
                    PT-BR
                </option>
            </select>
        </>

        // FIXME: I couldn't use the Select component from Shadcn because the weired margin will appear on the right side of the container
        // <Select value={locale} onValueChange={handleLanguageChange}>
        //     <SelectTrigger className="w-[70px]">
        //         <SelectValue placeholder="Select Language" />
        //     </SelectTrigger>
        //     <SelectContent>
        //         <SelectItem value="en">
        //             <Image src={unitedStates} alt="english" width={25}/>
        //         </SelectItem>
        //         <SelectItem value="es">
        //             <Image src={spain} alt="spanish" width={25}/> 
        //         </SelectItem>
        //         <SelectItem value="pt">
        //             <Image src={brazil} alt="portuguese" width={25}/> 
        //         </SelectItem>
        //     </SelectContent>
        // </Select>
    );
};

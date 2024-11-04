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
        // The select component is a custom component that is not provided by the library
        // <>
        //     <select value={locale} onChange={(e) => handleLanguageChange(e.target.value)} className="w-[70px]">
        //         <option value="en">
        //             {t("en")}
        //             {/* <Image src={unitedStates} alt="english" width={25} /> */}
        //         </option>
        //         <option value="es">
        //             {t("es")}
        //             {/* <Image src={spain} alt="spanish" width={25} /> */}
        //         </option>
        //         <option value="pt">
        //             {t("pt")}
        //             {/* <Image src={brazil} alt="portuguese" width={25} /> */}
        //         </option>
        //     </select>
        // </>

        <Select value={locale} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">
                    <Image src={unitedStates} alt="english" width={25}/>
                </SelectItem>
                <SelectItem value="es">
                    <Image src={spain} alt="spanish" width={25}/> 
                </SelectItem>
                <SelectItem value="pt">
                    <Image src={brazil} alt="portuguese" width={25}/> 
                </SelectItem>
            </SelectContent>
        </Select>
    );
};

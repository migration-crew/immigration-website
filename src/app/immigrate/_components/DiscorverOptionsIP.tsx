"use client";

import { NavCardListIP } from "@/app/immigrate/_components/NavCardListIP";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heading } from "@/components/common/text/Heading";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { DiscoverOptionsListIP } from "./DiscoverOptionsListIP";

export const DiscorverOptionsIP = () => {
  const t = useTranslations("ImmigrationPrograms");
  const workPermitRef = useRef<HTMLDivElement>(null);
  const openWorkPermitRef = useRef<HTMLDivElement>(null);
  const pgwpRef = useRef<HTMLDivElement>(null);
  const lmiaRef = useRef<HTMLDivElement>(null);
  const sowpRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const refs = {
    workPermitRef,
    openWorkPermitRef,
    pgwpRef,
    lmiaRef,
    sowpRef,
  };

  return (
    <SectionContainer className="flex flex-col gap-4">
      <Heading className="text-2xl font-bold">{t("heading")}</Heading>
      <DiscoverOptionsListIP scrollToRef={scrollToRef} refs={refs} />
      <NavCardListIP refs={refs} />
    </SectionContainer>
  );
};

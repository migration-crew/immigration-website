import { cn } from "@/lib/utils";
import React from "react";

export const CtaButton = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-cta-buttons-mobile lg:text-cta-buttons", className)}>{children}</p>;
};

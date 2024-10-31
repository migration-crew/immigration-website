import { cn } from "@/lib/utils";
import React from "react";

export const Hero = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h1 className={cn("text-hero-section-mobile lg:text-hero-section", className)}>{children}</h1>;
};

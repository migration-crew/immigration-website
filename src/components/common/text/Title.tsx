import { cn } from "@/lib/utils";
import React from "react";

export const Title = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h2 className={cn("text-page-titles-mobile lg:text-page-titles", className)}>{children}</h2>;
};

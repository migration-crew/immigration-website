import { cn } from "@/lib/utils";
import React from "react";

export const OtherButton = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-other-buttons-mobile lg:text-other-buttons", className)}>{children}</p>;
};

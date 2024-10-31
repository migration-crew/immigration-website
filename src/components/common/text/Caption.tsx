import { cn } from "@/lib/utils";
import React from "react";

export const Caption = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-small-captions-mobile lg:text-small-captions", className)}>{children}</p>;
};

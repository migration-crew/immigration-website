import { cn } from "@/lib/utils";
import React from "react";

export const Input = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-inputs-mobile lg:text-inputs", className)}>
      {children}
    </p>
  );
};

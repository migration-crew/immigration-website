import { cn } from "@/lib/utils";
import React from "react";

export const Menu = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-menu-mobile lg:text-menu", className)}>{children}</p>
  );
};

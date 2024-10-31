import { cn } from "@/lib/utils";
import React from "react";

export const HeavySubHeader = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-text-heavy-sub-header-mobile lg:text-text-heavy-sub-header",
        className
      )}
    >
      {children}
    </p>
  );
};

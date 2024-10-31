import { cn } from "@/lib/utils";
import React from "react";

export const HeavyBody = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-text-heavy-body-mobile lg:text-text-heavy-body",
        className
      )}
    >
      {children}
    </p>
  );
};

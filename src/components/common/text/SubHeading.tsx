import React from 'react'
import { cn } from "@/lib/utils";

// 24_700_20_700

export const SubHeading = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-subheading-mobile lg:text-subheading", className)}>
      {children}
    </h3>
  );
};

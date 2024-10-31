import React from 'react'
import { cn } from "@/lib/utils";

export const TextHeading = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn("text-heading-mobile lg:text-heading", className)}>{children}</h2>
  )
}

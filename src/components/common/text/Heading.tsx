import React from 'react'
import { cn } from "@/lib/utils";

// 36_700 / 24_700

export const Heading = ({
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

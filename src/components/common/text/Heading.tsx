import React from 'react'
import { cn } from "@/lib/utils";

/**
 * Heading Text
 * @remarks
 * Desktop: 36px, 700 w, Mobile: 24px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Heading className='pb-4'>Take the Quiz</Heading>
 * ```
 */

export const Heading = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-heading-mobile md:text-heading", className)}>{children}</h3>
  )
}

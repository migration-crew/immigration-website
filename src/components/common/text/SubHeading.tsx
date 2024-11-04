import React from 'react'
import { cn } from "@/lib/utils";

/**
 * Sub heading Text
 * @remarks
 * Desktop: 24px, 700 w, Mobile: 20px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <SubHeading className='pb-4'>Take the Quiz</SubHeading>
 * ```
 */

export const SubHeading = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-subheading-mobile xl:text-subheading", className)}>
      {children}
    </h4>
  );
};

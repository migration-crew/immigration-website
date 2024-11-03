import { cn } from "@/lib/utils";
import React from "react";

/**
 * Input Text
 * @remarks
 * Desktop: 18px, 400 w, Mobile: 16px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Input className='pb-4'>Take the Quiz</Input>
 * ```
 */

export const Input = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-inputs-mobile md:text-inputs", className)}>
      {children}
    </p>
  );
};

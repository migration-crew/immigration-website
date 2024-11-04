import { cn } from "@/lib/utils";
import React from "react";

/**
 * Cta button Text
 * @remarks
 * Desktop: 20px, 700 w, Mobile: 16px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <CtaButton className='pb-4'>Take the Quiz</CtaButton>
 * ```
 */

export const CtaButton = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-cta-buttons-mobile xl:text-cta-buttons", className)}>{children}</p>;
};

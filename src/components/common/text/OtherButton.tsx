import { cn } from "@/lib/utils";
import React from "react";

/**
 * Other button Text
 * @remarks
 * Desktop: 20px, 400 w, Mobile: 16px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <OtherButton className='pb-4'>Take the Quiz</OtherButton>
 * ```
 */

export const OtherButton = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-other-buttons-mobile xl:text-other-buttons", className)}>{children}</p>;
};

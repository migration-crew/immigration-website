import { cn } from "@/lib/utils";
import React from "react";

/**
 * Caption Text
 * @remarks
 * Desktop: 14px, 400 w, Mobile: 12px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Caption className='pb-4'>Take the Quiz</Caption>
 * ```
 */

export const Caption = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-small-captions-mobile lg:text-small-captions", className)}>{children}</p>;
};

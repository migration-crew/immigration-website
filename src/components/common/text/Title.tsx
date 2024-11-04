import { cn } from "@/lib/utils";
import React from "react";

/**
 * Title Text
 * @remarks
 * Desktop: 48px, 700 w, Mobile: 32px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Title className='pb-4'>Take the Quiz</Title>
 * ```
 */

export const Title = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h2 className={cn("text-page-titles-mobile xl:text-page-titles", className)}>{children}</h2>;
};

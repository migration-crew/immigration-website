import { cn } from "@/lib/utils";
import React from "react";

/**
 * Heavy sub header Text
 * @remarks
 * Desktop: 20px, 700 w, Mobile: 16px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <HeavySubHeader className='pb-4'>Take the Quiz</HeavySubHeader>
 * ```
 */

export const HeavySubHeader = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-text-heavy-sub-header-mobile xl:text-text-heavy-sub-header",
        className
      )}
    >
      {children}
    </p>
  );
};

import { cn } from "@/lib/utils";
import React from "react";

/**
 * Heavy body Text
 * @remarks
 * Desktop: 16px, 400 w, Mobile: 12px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <HeavyBody className='pb-4'>Take the Quiz</HeavyBody>
 * ```
 */

export const HeavyBody = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-text-heavy-body-mobile lg:text-text-heavy-body",
        className
      )}
    >
      {children}
    </p>
  );
};

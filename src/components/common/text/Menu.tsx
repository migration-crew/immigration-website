import { cn } from "@/lib/utils";
import React from "react";

/**
 * Menu Text
 * @remarks
 * Desktop: 16px, 700 w, Mobile: 14px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Menu className='pb-4'>Take the Quiz</Menu>
 * ```
 */

export const Menu = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-menu-mobile xl:text-menu", className)}>{children}</p>
  );
};

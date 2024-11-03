import { cn } from '@/lib/utils';
import React from 'react'


/**
 * Paragraph Text
 * @remarks
 * Desktop: 18px, 400 w, Mobile: 14px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Paragraph className='pb-4'>Take the Quiz</Paragraph>
 * ```
 */

export const Paragraph = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-paragraph-text-mobile lg:text-paragraph-text", className)}>{children}</p>
  )
}

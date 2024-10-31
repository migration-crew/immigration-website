import { cn } from '@/lib/utils';
import React from 'react'

// 18_400 / 14_400

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

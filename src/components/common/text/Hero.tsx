import React from "react";

/**
 * Hero page Text
 * @remarks
 * Desktop: 60px, 700 w, Mobile: 36px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Hero className='pb-4'>Take the Quiz</Hero>
 * ```
 */

export const Hero = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  //When we put cn(), this component doesn't work on picuture
  return (
    <h1
      className={`text-hero-section-mobile xl:text-hero-section ${className}`}
    >
      {children}
    </h1>
  );
};

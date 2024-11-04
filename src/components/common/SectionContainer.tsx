import { cn } from "@/lib/utils";
import React from "react";

/**
 * Common Section Container
 * @param className - pass custom classes
 * @param bgColor - pass background color
 * @param children - our own components or html elements
 * @example
 * ```tsx
 *  <SectionContainer className="py-[40px] lg:py-[50px]">
      <p>By taking this quiz, you will discover xxx.</p>
    </SectionContainer>
 * ```
 */
export const SectionContainer = ({
  className,
  bgColor,
  children,
}: {
  className?: string | undefined;
  bgColor?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <section className={cn("grid place-content-center w-full", bgColor)}>
      <div className={cn("w-[355px] xl:w-[1080px]", className)}>{children}</div>
    </section>
  );
};

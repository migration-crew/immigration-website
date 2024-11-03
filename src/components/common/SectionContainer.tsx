import { cn } from "@/lib/utils";
import React from "react";

/**
 * Common Section Container
 * @param className - pass custom classes
 * @param children - our own components or html elements
 * @example
 * ```tsx
 *  <SectionContainer className="py-[40px] md:py-[50px]">
      <p>By taking this quiz, you will discover xxx.</p>
    </SectionContainer>
 * ```
 */
export const SectionContainer = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <section className="grid place-content-center w-full">
      <div className={cn("w-[398px] md:w-[1080px]", className)}>{children}</div>
    </section>
  );
};

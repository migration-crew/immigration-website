import { cn } from "@/lib/utils";
import React from "react";

export const SectionContainer = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <section className="grid place-content-center w-full">
      <div className={cn("max-w-[398px] lg:max-w-[1080px]", className)}>
        {children}
      </div>
    </section>
  );
};

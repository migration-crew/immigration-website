import { CtaButton } from "@/components/common/text/CtaButton";
import { Paragraph } from "@/components/common/text/Paragraph";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  order:string
};

export const Strength = ({ icon, title, text, order }: Props) => {
  return (
    <div className={`flex ${order}`}>
      <div className="py-6 px-3 mr-5">{icon}</div>
      <div>
        {/* in figma, both desk top and mobile are 16px, 700 weight */}
        <CtaButton className="text-primary-red mb-1">{title}</CtaButton>
        {/* in figma, both desk top and mobile are 14px, 400 weight */}
        <Paragraph>{text}</Paragraph>
      </div>
    </div>
  );
};

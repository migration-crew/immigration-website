import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-primary-white": "var(--primary-white)",
        "neutral-secondary-white": "var(--secondary-white)",
        "primary-red": "var(--primary-red)",
        "primary-hover-red": "var(--primary-hover-red)",
        "primary-hover-pink": "var(--primary-hover-pink)",
        "secondary-blue": "var(--secondary-blue)",
        "secondary-blue-op-20": "var(--secondary-blue-op-20)",
        "secondary-hover-blue": "var(--secondary-hover-blue)",
        "primary-black": "var(--text-primary-black)",
        "secondary-black": "var(--text-secondary-black)",
        "disabled-black": "var(--text-disabled-black)",
        "primary-white": "var(--text-primary-white)",
        "secondary-white": "var(--text-secondary-white)",
        "disabled-white": "var(--text-disabled-white)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        "hero-section": [
          "var(--font-size-hero-section)",
          { fontWeight: "var(--font-weight-hero-section)" },
        ],
        "page-titles": [
          "var(--font-size-page-titles)",
          { fontWeight: "var(--font-weight-page-titles)" },
        ],
        heading: [
          "var(--font-size-heading)",
          { fontWeight: "var(--font-weight-heading)" },
        ],
        subheading: [
          "var(--font-size-subheading)",
          { fontWeight: "var(--font-weight-subheading)" },
        ],
        "paragraph-text": [
          "var(--font-size-paragraph-text)",
          { fontWeight: "var(--font-weight-paragraph-text)" },
        ],
        "small-captions": [
          "var(--font-size-small-captions)",
          { fontWeight: "var(--font-weight-small-captions)" },
        ],
        "cta-buttons": [
          "var(--font-size-cta-buttons)",
          { fontWeight: "var(--font-weight-cta-buttons)" },
        ],
        "other-buttons": [
          "var(--font-size-other-buttons)",
          { fontWeight: "var(--font-weight-other-buttons)" },
        ],
        menu: [
          "var(--font-size-menu)",
          { fontWeight: "var(--font-weight-menu)" },
        ],
        inputs: [
          "var(--font-size-inputs)",
          { fontWeight: "var(--font-weight-inputs)" },
        ],
        "text-heavy-sub-header": [
          "var(--font-size-text-heavy-sub-header)",
          { fontWeight: "var(--font-weight-text-heavy-sub-header)" },
        ],
        "text-heavy-body": [
          "var(--font-size-text-heavy-body)",
          { fontWeight: "var(--font-weight-text-heavy-body)" },
        ],
        // Mobile variants
        "hero-section-mobile": [
          "var(--font-size-hero-section-for-mobile)",
          { fontWeight: "var(--font-weight-hero-section-for-mobile)" },
        ],
        "page-titles-mobile": [
          "var(--font-size-page-titles-for-mobile)",
          { fontWeight: "var(--font-weight-page-titles-for-mobile)" },
        ],
        "heading-mobile": [
          "var(--font-size-heading-for-mobile)",
          { fontWeight: "var(--font-weight-heading-for-mobile)" },
        ],
        "subheading-mobile": [
          "var(--font-size-subheading-for-mobile)",
          { fontWeight: "var(--font-weight-subheading-for-mobile)" },
        ],
        "paragraph-text-mobile": [
          "var(--font-size-paragraph-text-for-mobile)",
          { fontWeight: "var(--font-weight-paragraph-text-for-mobile)" },
        ],
        "small-captions-mobile": [
          "var(--font-size-small-captions-for-mobile)",
          { fontWeight: "var(--font-weight-small-captions-for-mobile)" },
        ],
        "cta-buttons-mobile": [
          "var(--font-size-cta-buttons-for-mobile)",
          { fontWeight: "var(--font-weight-cta-buttons-for-mobile)" },
        ],
        "other-buttons-mobile": [
          "var(--font-size-other-buttons-for-mobile)",
          { fontWeight: "var(--font-weight-other-buttons-for-mobile)" },
        ],
        "menu-mobile": [
          "var(--font-size-menu-for-mobile)",
          { fontWeight: "var(--font-weight-menu-for-mobile)" },
        ],
        "inputs-mobile": [
          "var(--font-size-inputs-for-mobile)",
          { fontWeight: "var(--font-weight-inputs-for-mobile)" },
        ],
        "text-heavy-sub-header-mobile": [
          "var(--font-size-text-heavy-sub-header-for-mobile)",
          { fontWeight: "var(--font-weight-text-heavy-sub-header-for-mobile)" },
        ],
        "text-heavy-body-mobile": [
          "var(--font-size-text-heavy-body-for-mobile)",
          { fontWeight: "var(--font-weight-text-heavy-body-for-mobile)" },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "testimonials-card": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

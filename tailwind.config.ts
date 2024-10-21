import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        "primary-sub": "#757C86",
        point: "#7F21F7",
        "point-sub": "#E5D7F8",
        warning: "#FF6060",
        "warning-sub": "#FFE2E2",
        success: "#7F21F7",
        "success-sub": "#E5D7F8",
        "gradient-point-1": "#5C61DE",
        "gradient-point-2": "#AC7BFB",
        "gray-0": "#FAFAFA",
        "gray-1": "#F7F7F7",
        "gray-2": "F0F0F0",
        "gray-3": "#BEBEBE",
        "gray-4": "#808080",
        "gray-5": "444444",
        "gray-6": "1A1A1A",
        "gray-7": "7B7B7B",
      },

      fontSize: {
        md: "16px",
        lg: "20px",
        extra: "26px",
        sm: "12px",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|border)-(gray-3|point|primary)$/,
    },
  ],
};
export default config;

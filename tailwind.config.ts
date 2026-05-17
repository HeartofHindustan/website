import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff8eb",
        saffron: "#e77725",
        turmeric: "#f5b23c",
        leaf: "#2f6f4e",
        mehendi: "#143d2c",
        kajal: "#21170f",
        clay: "#a85e32"
      },
      boxShadow: {
        glow: "0 24px 90px rgba(231, 119, 37, 0.24)",
        card: "0 18px 60px rgba(33, 23, 15, 0.12)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(245,178,60,0.28), transparent 30%), radial-gradient(circle at 80% 0%, rgba(47,111,78,0.18), transparent 28%), linear-gradient(135deg, #fff8eb 0%, #fff3df 48%, #fde6c7 100%)",
        "saffron-glow":
          "linear-gradient(135deg, rgba(231,119,37,0.95), rgba(245,178,60,0.88))"
      }
    }
  },
  plugins: []
};

export default config;

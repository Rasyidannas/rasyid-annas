/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-10": "#01080E",
      "primary-20": "#011627",
      "primary-30": "#011221",
      "secondary-10": "#607B96",
      "secondary-20": "#3C9D93",
      "secondary-30": "#4D5BCE",
      "secondary-40": "#4D5BCE",
      "secondary-50": "#FFFFFF",
      "accent-10": "#FEA55F",
      "accent-20": "#43D9AD",
      "accent-30": "#E99287",
      "accent-40": "#C98BDF",
      "lines-10": "#1E2D3D",
    },
    fontFamily: {
      monospace: ["Fira Code", "monospace"],
    },
    fontSize: {
      headline: "3.875rem",
      subheadline: "2rem",
      body: "1.125rem",
      labels: "1rem",
      code: "0.875rem",
    },
  },
  plugins: [],
};

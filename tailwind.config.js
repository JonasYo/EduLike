/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#eff6ff",
        //   100: "#dbeafe",
        //   200: "#bfdbfe",
        //   300: "#93c5fd",
        //   400: "#60a5fa",
        //   500: "#3b82f6",
        //   600: "#2563eb",
        //   700: "#1d4ed8",
        //   800: "#1e40af",
        //   900: "#1e3a8a",
        // },
        primary: {
          50: "#f6f2fa",
          100: "#e8e0f2",
          200: "#d3b3e5",
          300: "#be85d7",
          400: "#a959c9",
          500: "#542583",
          600: "#481f70",
          700: "#3b195d",
          800: "#2f144a",
          900: "#230f37",
        },
        secondary: {
          50: "#fffbf2",
          100: "#fff3d9",
          200: "#ffebaf",
          300: "#ffe285",
          400: "#ffda5c",
          500: "#f2bb13",
          600: "#e5a40c",
          700: "#cc8e0a",
          800: "#b37a09",
          900: "#8a5f06",
        },
        tertiary: {
          50: "#fefaf2",
          100: "#fcf2d9",
          200: "#f9e8b3",
          300: "#f6df8c",
          400: "#f4d767",
          500: "#f2d16d",
          600: "#e5bc41",
          700: "#d3a62b",
          800: "#b28921",
          900: "#8c6e1a",
        },
        quaternary: {
          50: "#f9f2f9",
          100: "#f0e0f0",
          200: "#ddb3de",
          300: "#c985cc",
          400: "#b659b9",
          500: "#a56da6",
          600: "#8d598c",
          700: "#70426f",
          800: "#542e53",
          900: "#391b37",
        },
        quinary: {
          50: "#fffafc",
          100: "#ffeff6",
          200: "#ffd6e9",
          300: "#ffbedc",
          400: "#f8a5ce",
          500: "#f2c2dc",
          600: "#d4a1b7",
          700: "#b68195",
          800: "#956675",
          900: "#734c55",
        },
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(264.16deg, rgba(93, 33, 210, 0.4) 7.41%, rgba(111, 195, 255, 0.24) 100%), linear-gradient(227.96deg, #5D21D2 -65.63%, #4B1BAF 100%)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

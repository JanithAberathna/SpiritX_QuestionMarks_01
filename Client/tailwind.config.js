/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E", // Secure Dark Cyan
        secondary: "#2563EB", // Electric Blue
        accent: "#10B981", // Neon Green
        background: "#111827", // Dark Theme Background
        text: "#F9FAFB", // Light Text
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        secureconnect: {
          "primary": "#0F766E",
          "secondary": "#2563EB",
          "accent": "#10B981",
          "neutral": "#1E293B",
          "base-100": "#111827",
          "info": "#3B82F6",
          "success": "#22C55E",
          "warning": "#FBBF24",
          "error": "#EF4444",
        },
      },
    ],
  },
};

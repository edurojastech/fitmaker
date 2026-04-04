/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        neon: {
          red: "#ff2d2d",
          orange: "#ff6a00",
        },
        dark: {
          primary: "#0f0f0f",
          secondary: "#1a1a1a",
          tertiary: "#2a2a2a",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
        "gradient-red": "linear-gradient(135deg, #ff2d2d 0%, #ff6a00 100%)",
        "gradient-glow": "radial-gradient(circle, rgba(255, 45, 45, 0.1) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 45, 45, 0.3)",
        "glow-lg": "0 0 40px rgba(255, 45, 45, 0.4)",
        "glow-xl": "0 0 60px rgba(255, 45, 45, 0.5)",
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 45, 45, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 45, 45, 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      spacing: {
        "safe": "max(1rem, env(safe-area-inset-left))",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      transitionDuration: {
        "300": "300ms",
        "500": "500ms",
      },
    },
  },
  plugins: [],
}
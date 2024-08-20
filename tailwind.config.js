/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: { min: "300px", max: "400px" },
        mi: { min: "400px", max: "500px" },
        ma: { min: "500px", max: "800px" },
        ma1: { min: "500px", max: "600px" },
        ma2: { min: "600px", max: "800px" },
        mac: { min: "801px", max: "900px" },
        mac1: { min: "901px", max: "1100px" },
        mac2: { min: "1101px", max: "4000px" },
        mac3: { min: "300px", max: "768px" },
      },
    },
  },
  plugins: [],
};

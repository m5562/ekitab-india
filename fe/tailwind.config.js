/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bae': {
          '50': '#f9f7fd',
          '100': '#f1edfa',
          '200': '#e5ddf7',
          '300': '#d1c3ef',
          '400': '#b59ce4',
          '500': '#9875d7',
          '600': '#8057c6',
          '700': '#6c44ac',
          '800': '#613f95',
          '900': '#4b3172',
          '950': '#301952',
      },
      
      }
    },
  },
  plugins: [],
};

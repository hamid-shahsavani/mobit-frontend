/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // global
        'base-white': '#FFFFFF',
        'base-green': '#66BB6A',
        'base-red': '#FF6A6A',
        'base-yellow': '#FFBD5C',
        'base-purple': '#B183F8',
        'base-royal-blue': '#377DFF',
        'base-sky-blue': '#55E0F6',
        'base-gray-100': '#F5F5F5',
        'base-gray-200': '#DDDDDD',
        'base-gray-300': '#ABB4BC',
        'base-gray-400': '#5D6670',
        'base-gray-500': '#3F434D',
        'base-gray-600': '#1E2022',
      },
    },
  },
  plugins: [],
};

import theme from './theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/functions/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      backgroundImage: {
        'base-gradient-purple':
          'linear-gradient(to right, #2124b5, #3b3ece, #2124b5)',
      },
      colors: {
        'base-green': theme.colors.green,
        'base-red': theme.colors.red,
        'base-yellow': theme.colors.yellow,
        'base-purple': theme.colors.purple,
        'base-royal-blue': theme.colors['royal-blue'],
        'base-sky-blue': theme.colors['sky-blue'],
        'base-gray-50': theme.colors['gray-50'],
        'base-gray-100': theme.colors['gray-100'],
        'base-gray-200': theme.colors['gray-200'],
        'base-gray-300': theme.colors['gray-300'],
        'base-gray-400': theme.colors['gray-400'],
        'base-gray-500': theme.colors['gray-500'],
        'base-gray-600': theme.colors['gray-600'],
      },
      fontSize: {
        'base-xs': theme.fontSize.xs,
        'base-sm': theme.fontSize.sm,
        'base-md': theme.fontSize.md,
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-800': '#333333',
        'gray-100': '#808080',
        'btn-gray': '#D9D9D9',
        'main-green': '#05CBBE',
        'btn-yellow': '#FEE500',
      },
      boxShadow: {
        custom: '0px -2px 8px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;

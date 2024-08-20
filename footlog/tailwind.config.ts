import type { Config } from 'tailwindcss';

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: Array.from({ length: 1000 }, (_, index) => {
        const value = pxToRem(index + 1);
        return { [`${index + 1}pxr`]: value };
      }).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-8': '#333333',
        'gray-4': '#808080',
        'gray-3': '#E2E2E2',
        'gray-2': '#D9D9D9',
        'gray-1': '#F0F0F0',
        'main-green': '#05CBBE',
        'btn-yellow': '#FEE500',
      },
      boxShadow: {
        navBar: '0px -2px 8px 0px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        searchBar: '21px',
      },
    },
  },
  plugins: [],
};
export default config;

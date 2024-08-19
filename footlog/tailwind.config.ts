import type { Config } from 'tailwindcss';

const pxToRem = (px: number, base = 16) => `${px / base}rem`;
const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        ...range(1, 100).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        }, {}),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray_8: '#333333',
        gray_4: '#808080',
        gray_3: '#E2E2E2',
        gray_2: '#D9D9D9',
        gray_1: '#F0F0F0',
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

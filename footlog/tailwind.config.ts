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
        gray8: '#333333',
        gray3: '#808080',
        gray2: '#E2E2E2',
        gray1: '#D9D9D9',
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

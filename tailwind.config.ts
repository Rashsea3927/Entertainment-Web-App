import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1440px',
    },
    extend: {
      margin: {
        '18': '4.5rem',
      },
      colors: {
        neutral: {
          '0': 'var(--neutral-0)',
        },
        blue: {
          '400': 'var(--blue-400)',
          '800': 'var(--blue-800)',
          '900': 'var(--blue-900)',
        },
        red: {
          '500': 'var(--red-500)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

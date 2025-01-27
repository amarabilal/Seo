// @ts-check
import { fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'

/** @type {import("tailwindcss/types").Config } */
const config = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
      backgroundSize: {
        'gradient-200': '200% 200%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          50: '#f2f4ff',
          100: '#e5e8ff',
          200: '#b8c2ff',
          300: '#8a9cff',
          400: '#5d76ff',
          500: '#4f46e5',
          600: '#3e3abe',
          700: '#2e2c96',
          800: '#1e1e6f',
          900: '#0f0f47',
        },
        secondary: {
          DEFAULT: '#030712',
        },
        gray: colors.gray,
        accent: {
          DEFAULT: '#9333ea',
          50: '#f7e9ff',
          100: '#eeddff',
          200: '#d5b3ff',
          300: '#bb88ff',
          400: '#a25eff',
          500: '#9333ea',
          600: '#7310c7',
          700: '#570e9e',
          800: '#3c0b75',
          900: '#20074c',
        },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              fontFamily: theme('fontFamily.heading'),
            },
            h3: {
              fontWeight: '600',
              fontFamily: theme('fontFamily.sans'),
            },
            code: {
              color: theme('colors.accent.500'),
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.500'),
              color: theme('colors.gray.700'),
            },
            strong: {
              color: theme('colors.primary.600'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              borderLeftColor: theme('colors.accent.500'),
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [formsPlugin, typographyPlugin],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ─── Color Palette ─────────────────────────────────── */
      colors: {
        emerald: {
          dark:    '#0B3D2E',   // Deep emerald – hero, footer, dark sections
          DEFAULT: '#0F4F3A',   // Primary emerald
          light:   '#1A6B4F',   // Lighter emerald for hover states
        },
        gold: {
          DEFAULT: '#C8A96E',   // Core gold accent – highlights, borders, signatures
          light:   '#D4BC8A',   // Softer gold for backgrounds/badges
          dark:    '#A88B4A',   // Richer gold for hover states
        },
        cream: {
          DEFAULT: '#FAF8F5',   // Main light page background
          warm:    '#F5F0E8',   // Slightly warmer cream for alternating sections
          dark:    '#EDE8DD',   // Deeper cream for subtle cards/dividers
        },
        neutral: {
          white:   '#FFFFFF',
          offwhite:'#FEFEFE',
          gray: {
            100: '#F7F7F7',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },

      /* ─── Typography ────────────────────────────────────── */
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],          // Editorial headings
        sans:    ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'], // Body copy
        mono:    ['"JetBrains Mono"', 'monospace'],                    // Code / accents
      },
      fontSize: {
        'display-2xl': ['4.5rem',   { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg':  ['3rem',     { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md':  ['2.25rem',  { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-xl':     ['1.25rem',  { lineHeight: '1.75', fontWeight: '400' }],
        'body-lg':     ['1.125rem', { lineHeight: '1.7',  fontWeight: '400' }],
        'body-md':     ['1rem',     { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm':     ['0.875rem', { lineHeight: '1.6',  fontWeight: '400' }],
        'label-lg':    ['0.875rem', { lineHeight: '1.4',  letterSpacing: '0.08em', fontWeight: '600' }],
        'label-md':    ['0.75rem',  { lineHeight: '1.4',  letterSpacing: '0.1em',  fontWeight: '600' }],
        'label-sm':    ['0.6875rem',{ lineHeight: '1.35', letterSpacing: '0.12em', fontWeight: '700' }],
      },

      /* ─── Spacing & Layout ─────────────────────────────── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'content': '1280px',
        'narrow':  '768px',
        'wide':    '1440px',
      },

      /* ─── Borders & Radius ─────────────────────────────── */
      borderRadius: {
        'sm':  '0.25rem',
        'md':  '0.5rem',
        'lg':  '0.75rem',
        'xl':  '1rem',
        '2xl': '1.5rem',
      },

      /* ─── Shadows ───────────────────────────────────────── */
      boxShadow: {
        'soft':     '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'elevated': '0 10px 40px -10px rgba(0,0,0,0.12)',
        'gold':     '0 4px 20px -4px rgba(200,169,110,0.35)',
      },

      /* ─── Transitions ──────────────────────────────────── */
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

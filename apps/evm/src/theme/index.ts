export const theme = {
  fontFamily: {
    sans: ['ProximaNova', 'Arial', 'sans-serif'],
  },
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    xxl: '1440px',
  },
  colors: {
    inherit: 'inherit',
    transparent: 'transparent',
    // The next colors are taken from the UI kit in Figma
    // background: '#181D27',
    background: '#000',
    // cards: '#1E2431',
    cards: '#07090e',
    grey: '#AAB3CA',
    lightGrey: 'rgba(32, 39, 56, .4)',
    green: '#00C38E',
    red: '#E93D66',
    offWhite: '#FFFFFF',
    orange: '#F57842',
    yellow: '#F5B242',
    blue: '#b8d022',
    // The next colors are not in the UI kit, but are used throughout the designs
    mediumBlue: '#265ACC',
    darkBlue: '#1B4398',
    // LendLand
    yellowDark: '#b8d022',
    yellowDarker: '#9eb706',
    white: '#fff',
    black: '#000'
  },
  fontSize: {
    xs: ['0.75rem', '1.5'],
    sm: ['0.875rem', '1.5'],
    base: ['1rem', '1.5'],
    lg: [
      '1.25rem',
      {
        lineHeight: '1.5',
        fontWeight: '600',
      },
    ],
    xl: [
      '1.5rem',
      {
        lineHeight: '1.5',
        fontWeight: '700',
      },
    ],
    '2xl': [
      '2rem',
      {
        lineHeight: '1.5',
        fontWeight: '600',
      },
    ],
    '3xl': [
      '2.5rem',
      {
        lineHeight: '1.2',
        fontWeight: '600',
      },
    ],
  },
  boxShadow: {
    DEFAULT: '0px 4px 15px 0px #0D1017',
  },
  // We keep Tailwind's original sizing scale but make it more granular (with 0.25rem steps) and
  // extend it to bigger values
  spacing: new Array(200).fill(undefined).map((_, index) => `${index * 0.25}rem`),
};

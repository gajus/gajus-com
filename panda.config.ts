// cspell:ignore outdir

import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  exclude: [],
  hash: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: 'styled-system',
  preflight: true,
  strictTokens: false,
  theme: {
    extend: {
      tokens: {
        colors: {
          'action-100': { value: '#0200FF' },
          'border-100': { value: '#eee' },
          'code-background-100': { value: '#2E2E32' },
          white: { value: '#fff' },
        },
        fontSizes: {
          x1: { value: '12px' },
          x2: { value: '14px' },
          x3: { value: '18px' },
          x4: { value: '24px' },
          x5: { value: '32px' },
          x6: { value: '48px' },
          x7: { value: '64px' },
          x8: { value: '96px' },
          x9: { value: '128px' },
        },
        fontWeights: {
          500: { value: 500 },
          700: { value: 700 },
        },
        lineHeights: {
          '1.5em': { value: '1.5em' },
          '2em': { value: '2em' },
        },
        radii: {
          '8px': { value: '8px' },
        },
        spacing: {
          '0.5em': { value: '0.5em' },
          '0px': { value: '0px' },
          '1em': { value: '1em' },
          '8px': { value: '8px' },
          '16px': { value: '16px' },
          '24px': { value: '24px' },
          '32px': { value: '32px' },
        },
      },
    },
  },
});

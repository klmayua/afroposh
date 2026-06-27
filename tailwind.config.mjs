/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9922A',
        'gold-light': '#E8B84B',
        ink: '#1A1A1A',
        'ink-soft': '#3D3D3D',
        'ink-muted': '#7A7A7A',
        'green-cta': '#1A6B4A',
        surface: '#F9F7F4',
        border: '#E8E4DE',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', '-apple-system', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

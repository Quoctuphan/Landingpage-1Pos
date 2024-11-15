/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '--primary': '#007aff',
        '--title': '#274b96 ',
      },
      transform: {
        'rotate-x-20': 'rotateX(20deg)',
      },
      screens: {
        'ss': { 'max': '639px' }, // Màn hình nhỏ hơn 640px
        'tbl': { 'max': '821px' }, // Màn hình nhỏ hơn 640px
      },
    },
  },
  plugins: [
    // dùng để chỉ định dòng thêm giấu ....
    require('@tailwindcss/line-clamp'), 
  ],
}

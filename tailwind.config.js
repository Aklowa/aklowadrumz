/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'
export default {
  content: [ 
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
   ],
  theme: {
    extend: {
      colors: {
        primary: '#fff'
      }
     },
  },
  plugins: [tailwindTypography],
}


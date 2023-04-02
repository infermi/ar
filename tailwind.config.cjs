/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            fontFamily: {
                'arimo': 'Arimo',
                'sans': '"Open Sans"'
            },

            variants: {
                animation: ["motion-safe"]
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in forwards "
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: 'translate(0, 50px)' },
                    "100%": { opacity: 1 }
                }
            }
        },

    },
    plugins: [require("tailwindcss-animation-delay"), require('prettier-plugin-tailwindcss')],
}
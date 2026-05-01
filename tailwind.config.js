import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile': '360px',
            'tablet': '768px',
            'desktop': '1280px',
        },
        extend: {},
    },
    plugins: [
        tailwindcssAnimate,
    ],
}

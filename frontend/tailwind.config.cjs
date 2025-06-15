/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    darkMode: 'class',                // 手动切换深色
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0ea5e9',      // theme-primary
                    dark: '#0284c7',
                },
            },
        },
    },
    plugins: [],
};
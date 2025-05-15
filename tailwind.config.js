import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
    important: true,
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--geist-font)', ...fontFamily.sans],
            },
        },
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
}
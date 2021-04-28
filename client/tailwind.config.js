const colors = require('tailwindcss/colors');
const typography = require('tailwindcss-typography');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.gray,
            primary: colors.amber,
            red: colors.red,
            blue: colors.lightBlue,
            yellow: colors.yellow,
            ...colors,
        },
        textShadow: {
            primary: '0px 0px 15px rgba(251, 191, 36, 0.6)',
            'primary-bright': '0px 0px 15px rgba(251, 191, 36, 0.8)',
            'primary-sm': '0px 0px 7px rgba(251, 191, 36, 0.8)',
            lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
        },

        extend: {
            dropShadow: {
                spotify: '0px 0px 7px rgba(30, 215, 96, 0.4)',
                github: '0px 0px 7px rgba(192, 192, 192, 0.4)',
                twitter: '0px 0px 7px rgba(29, 161, 242, 0.4)',
            },
            backgroundImage: (theme) => ({
                'hero-computer': "url('/laptopherobg.png')",
                'hero-computer-md': "url('/hero-computer-768.jpg')",
                'hero-computer-lg': "url('/hero-computer-1280.jpg')",
            }),
            fontFamily: {
                poppins: ['Poppins', 'Arial', 'sans-serif', 'system-ui'],
                sans: ['Open Sans', 'Arial', 'sans-serif', 'system-ui'],
            },
            animation: {
                fadeInDown: 'fadeInDown',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
                    to: { transform: 'translateZ(0)', opacity: 1 },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [typography],
};

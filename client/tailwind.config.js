const colors = require('tailwindcss/colors');

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
            fuchsia: colors.fuchsia,
            red: colors.red,
            blue: colors.lightBlue,
            yellow: colors.amber,
        },
        extend: {
            backgroundImage: (theme) => ({
                'hero-computer': "url('/laptopherobg.png')",
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
    plugins: [],
};

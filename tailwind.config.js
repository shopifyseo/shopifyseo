const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './_includes/*.html',
        './_layouts/*.html',
        './_site/*.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: '#FDFFF5',
                    100: '#F2FBD5',
                    200: '#E3F8AE',
                    300: '#C9EA81',
                    400: '#ABD55D',
                    500: '#83B92F',
                    600: '#699F22',
                    700: '#518517',
                    800: '#3C6B0E',
                    900: '#2C5809'
                },
                secondary: {
                    50: '#DFFFED',
                    100: '#C4F6DA',
                    200: '#8EEDC0',
                    300: '#50C99B',
                    400: '#249373',
                    500: '#004B3D',
                    600: '#00403A',
                    700: '#003536',
                    800: '#00272B',
                    900: '#001D24'
                },
                neutral: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827'
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}

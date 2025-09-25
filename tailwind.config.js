/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}', // App directory (App Router)
    './pages/**/*.{js,ts,jsx,tsx}', // Optional if using Page Router
    './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        colors: {
            chipotle: {
                red: '#7A0026', // Chipotle-style red
                gold: '#E3B23C', // Accent gold
                beige: '#FFF6ED', // Light background
                brown: '#5C4033', // Rich brown text
            },
        },
        fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        boxShadow: {
            card: '0 4px 10px rgba(0,0,0,0.06)',
        },
        animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
};
export const plugins = [];

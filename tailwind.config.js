/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                'xs': '475px',      // Extra small devices
                '3xl': '1600px',    // Ultra-wide screens
                '4xl': '1920px',    // 4K screens
                // Custom breakpoints for specific needs
                'mobile': {'max': '767px'},
                'tablet': {'min': '768px', 'max': '1023px'},
                'desktop': {'min': '1024px'},
                // Print media
                'print': {'raw': 'print'},
            },
            spacing: {
                '18': '4.5rem',     // 72px
                '84': '21rem',      // 336px
                '88': '22rem',      // 352px
                '100': '25rem',     // 400px
                '112': '28rem',     // 448px
                '128': '32rem',     // 512px
                '144': '36rem',     // 576px
                '160': '40rem',     // 640px
                '176': '44rem',     // 704px
                '192': '48rem',     // 768px
            },
            fontSize: {
                '2xs': ['0.625rem', { lineHeight: '0.75rem' }],  // 10px
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],    // 36px
                '5xl': ['3rem', { lineHeight: '1' }],            // 48px
                '6xl': ['3.75rem', { lineHeight: '1' }],         // 60px
                '7xl': ['4.5rem', { lineHeight: '1' }],          // 72px
                '8xl': ['6rem', { lineHeight: '1' }],            // 96px
                '9xl': ['8rem', { lineHeight: '1' }],            // 128px
            },
            animation: {
                'fadeInUp': 'fadeInUp 0.6s ease-out',
                'fadeInDown': 'fadeInDown 0.6s ease-out',
                'fadeInLeft': 'fadeInLeft 0.6s ease-out',
                'fadeInRight': 'fadeInRight 0.6s ease-out',
                'slideInLeft': 'slideInLeft 0.6s ease-out',
                'slideInRight': 'slideInRight 0.6s ease-out',
                'slideInUp': 'slideInUp 0.6s ease-out',
                'slideInDown': 'slideInDown 0.6s ease-out',
                'bounce-slow': 'bounce 2s infinite',
                'pulse-slow': 'pulse 3s infinite',
                'spin-slow': 'spin 3s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slideInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                glow: {
                    '0%': {
                        boxShadow: '0 0 5px rgba(239, 68, 68, 0.5)',
                    },
                    '100%': {
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 30px rgba(239, 68, 68, 0.6)',
                    },
                },
            },
            backdropBlur: {
                'xs': '2px',
                '3xl': '64px',
            },
            backdropBrightness: {
                25: '.25',
                175: '1.75',
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                12: '12',
                15: '15',
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '2/3': '2 / 3',
                '9/16': '9 / 16',
            },
            colors: {
                // Custom color palette for better theming
                primary: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                },
                dark: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#030712',
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(239, 68, 68, 0.5)',
                'glow-lg': '0 0 40px rgba(239, 68, 68, 0.6)',
                'inner-glow': 'inset 0 0 20px rgba(239, 68, 68, 0.3)',
                '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
                '4xl': '0 45px 100px -12px rgba(0, 0, 0, 0.25)',
            },
            blur: {
                '4xl': '72px',
                '5xl': '96px',
            },
            scale: {
                '102': '1.02',
                '103': '1.03',
                '115': '1.15',
                '125': '1.25',
            },
            rotate: {
                '360': '360deg',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
                '900': '900ms',
                '1200': '1200ms',
                '1500': '1500ms',
                '2000': '2000ms',
            },
            transitionDelay: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
                '900': '900ms',
                '1200': '1200ms',
            },
        },
    },
    plugins: [],
};
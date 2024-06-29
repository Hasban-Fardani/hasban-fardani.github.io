import colors from 'tailwindcss/colors'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B1B1B', // Eerie Black
        blue: colors.blue, // Use Tailwind's default blue
        green: colors.green, // Use Tailwind's default green
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#1B1B1B',
          'primary-focus': '#0F0F0F',
          'primary-content': '#ffffff',
          'secondary': '#1C92F2', 
          'secondary-focus': '#147BD1',
          'secondary-content': '#ffffff',
          'accent': '#22C55E', 
          'accent-focus': '#16A34A',
          'accent-content': '#ffffff',
          'neutral': '#3D4451',
          'neutral-focus': '#2A2E37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1B1B1B',
          'info': '#2094f3',
          'success': '#22C55E',
          'warning': '#ff9900',
          'error': '#ff5724',
          '--rounded-btn': '0.375rem',
        },
      },
    ],
  },
};

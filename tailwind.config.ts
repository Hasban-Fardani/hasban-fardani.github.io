import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        './app.vue',
        './components/**/*.{vue,js,ts,jsx,tsx}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ]
}
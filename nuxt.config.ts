import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    app: {
        head: {
            title: 'Clon de Notion',
            link: [{ rel: 'icon', href: '/favicon.png', type: 'image/png' }]
        }
    },

    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [tailwindcss()]
    }
})

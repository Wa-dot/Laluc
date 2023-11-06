import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import en from './i18n/en.json'
import fr from './i18n/fr.json'


const i18n =  createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {
        fr,
        en
    }
})

createApp(App).
    use(router).
    use(i18n).
    mount('#app')
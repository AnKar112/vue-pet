import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from '@/App.vue' 
import router from '@/router/router'
import components from '@/components/UI'
import store from '@/store'
import '@/index.css' 

const app = createApp(App)

components.forEach(item => {
    app.component(item.name, item) 
})

app
    .use(router)
    .use(store)
    .use(VueCookieNext, { expire: '21d'})
    .mount('#app')

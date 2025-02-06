import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FooterComponent from "@/components/footer.vue";

const app = createApp(App);

app.component("FooterComponent", FooterComponent);

createApp(App).use(store).use(router).mount('#app')

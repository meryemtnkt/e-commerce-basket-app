import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store/index.js';
import router from '@/router.js';
import { createPinia } from 'pinia';
import '@/assets/style/main.scss';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(createPinia());
app.mount('#app');

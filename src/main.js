import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AxiosInstance from './api/axios';
import './index.css';



const app = createApp(App);

app.config.globalProperties.$http = AxiosInstance;

app.use(router);

app.mount('#app');
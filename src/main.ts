import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import './styles/base.less';
import 'element-plus/dist/index.css'
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(i18n);
app.mount('#app');

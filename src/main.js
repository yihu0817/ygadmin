import Vue from 'vue';
import App from '@/App';
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Sha256 from 'js-sha256';

Vue.use(ElementUI);
Vue.use(Sha256);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
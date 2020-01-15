import Vue from 'vue';
import App from '@/App';
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Sha256 from "js-sha256";
Vue.prototype.$Sha256 = Sha256;
console.log(`>>>>>>>>>>>`)
Vue.use(ElementUI);
store.dispatch("initMenu");
router.beforeEach((to, from, next) => {
    store.dispatch("initMenu");
    const isok = to.matched.some(record => record.meta.requireAuth)
    if (isok) {
        if (store.getters.getUser) {
            next();
        } else {
            next({path:"/"});
        }
    } else {
        next()
    }
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
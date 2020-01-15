import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: 'login', //重定向
        hidden: false
    },
    {
        name: "login",
        path: "/login",
        component: () => import("@/views/Login"),
        hidden: false

    },

    {
        name: "main",
        path: "/main",
        redirect: "about",
        component: () => import("@/views/Main"),
        children: [
            {
                name: "about",
                path: "/about",
                hidden: false,
                component: () => import("@/views/about.vue")
            }
        ]
    },

]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router


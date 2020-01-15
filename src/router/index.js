import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: 'login', //重定向
        hidden: false,
        mate: { requireAuth: false },

    },
    {
        name: "login",
        path: "/login",
        mate: { requireAuth: false },
        component: () => import("@/views/Login"),
        hidden: false

    },

    {
        name: "main",
        path: "/main",
        redirect: "about",
        meta: { requireAuth: true },
        hidden: true,
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


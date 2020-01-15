import Vuex from 'vuex';
import Vue from 'vue'
import { RequestSysMenu } from '@/api/UserApi'
import router from '@/router/index'

Vue.use(Vuex);

const state = {
    user: null,
    //定义路由动态
    menuRoutes: []
}

const mutations = {
    SAVE_USER(state, user) {
        state.user = user;
    },
    INIT_MENU(state, menu) {
        state.menuRoutes = menu
        localStorage.setItem("menu", JSON.stringify(state.menuRoutes));
    },
}

const actions = {
    saveUser({ commit, state }, user) {
        commit('SAVE_USER', user)
    },
    initMenu({ commit }) {
        RequestSysMenu().then(res => {
            if (res.code == 200) {
                //data.sysmenu服务器返回权限动态菜单数组
                let fmtRoutes = formatRoutes(res.sysmenu);
                //格式化的动态菜单添加到本地路由
                router.addRoutes(fmtRoutes);
                commit("INIT_MENU", fmtRoutes)
            }
        })
    },
}

const getters = {
    getUser: state => state.user,

    menu: state => {
        if (state.menuRoutes.length > 0) {
            return state.menuRoutes;
        } else {
            const menuObj = localStorage.getItem('menu');
            return JSON.parse(menuObj);
        }
    }
}

const VuexStore = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default VuexStore

/**
 * 格式化权限动态菜单，与本地路由组件对应
 * @param {*} routes 
 */
const formatRoutes = (routes) => {
    let fmRoutes = []
    routes.forEach(router => {
        let { path, component, name, meta, hidden, children, iconCls } = router;
        //递归遍历children
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            name: name,
            component: () => {
                if (component.trim().startsWith("Main")) {
                    return import('@/views/' + component + '.vue')
                } else if (component.startsWith("User")) {
                    return import('@/views/user/' + component + '.vue')
                } else if (component.startsWith("ProductList")) {
                    return import('@/views/product/products.vue')
                } else if (component.startsWith("ProductAdd")) {
                    return import('@/views/product/productadd.vue')
                } else if (component.startsWith("Log")) {
                    return import('@/views/log/' + component + '.vue')
                } else if (component.startsWith("ManagerList")) {
                    return import('@/views/manager/ManagerList.vue')
                }
            },
            meta: meta,
            hidden: hidden,
            iconCls: iconCls,
            children: children
        }
        fmRoutes.push(fmRouter);
    });
    return fmRoutes
}
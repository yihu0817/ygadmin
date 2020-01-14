import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    user: null
}

const mutations = {
    SAVE_USER(state,user){
        state.user = user;
    }
}

const actions = {
    saveUser({commit,state},user){
        commit('SAVE_USER',user)
    }
}

const getters = {
    getUser: state=> state.user
}

const VuexStore = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default VuexStore